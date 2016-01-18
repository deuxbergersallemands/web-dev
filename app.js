var connect = require("connect");
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;


var db = new Db('deuxbergersallemands_web-dev', new Server('localhost', 27017));
var express=require("express");
/****************************************************/
var bodyParser = require('body-parser')
var md5 = require("md5")

var url = "mongodb://localhost:27017/deuxbergersallemands_web-dev"
var app = express()

app.use(bodyParser.json()) // Nécessaire pour parser le body des requêtes PUT (Q5)

var getETag = function(body) {
    return md5(body)
}

app.set("etag", getETag)

MongoClient.connect(url, function(err, db) {

    db.collection("Utilisateur", function(err, Utilisateur) {
           app.use(express.static(__dirname+'/client'));
            app.get('/', function(req, res) {
                var cursor = db.Utilisateur.findOne();
                res.json({"foo": "bar"});
            });   
            app.get('/tableauDeBord', function(req, res) {
                console.log("req.body :",req.body);
                var users=Utilisateur.find({}).toArray( function(err, users) {
                    if (err) return next(err)
                    if (users == null)
                      res.status(404).end()
                    else{
                      res.send(users);
                    }
                })
            });
            app.post('/', function(req, res) {
                var melReq=req.body.mel;
                var MotDePasseReq=req.body.motDePasse;
                var u=Utilisateur.findOne({"mel":melReq}, function(err, u) {
                if (err) return next(err)
                if (u == null)
                    console.log("utilisateur non trouvable");
                else {
                    console.log(u);
                    if((u.mel==melReq)&&(u.MotDePasse==MotDePasseReq)){
                        console.log(u.mel,melReq,u.MotDePasse,MotDePasseReq);
                        result=true;
                        res.send();
                    }
                    else{
                        res.status(500).send({ error: "Les cordonées que vous avez fournisses ne sont pas valides." });
                    }

                }
                });
            });
            app.post('/inscription', function(req, res) {
                console.log(req.body);
                var melReq=req.body.mel;
                var NouveauUtilisateur= Utilisateur.findOne({"mel":melReq}, function(err, u) {
                if (err) return next(err)
                if (u==null){
                    UtilisateurAAjouter=req.body;
                    Utilisateur.insert(UtilisateurAAjouter);
                    res.send();
                }
                else{
                    console.log("utilisateur existe déja :",u);
                    res.status(500).send({ error: "utilisateur existe déja" });
                     }
                });
            });    
            /*  
            app.post('/transaction/nouvelle', function(req, res) {
                 console.log(req.body);
            });*/
           
      })


    db.collection("Transaction", function(err, Transaction) {

     
            app.post('/transaction/nouvelle', function(req, res) { 
                var dateCreationTransaction= new Date();              
                //console.log(req.body);
                var TransactionAAjouter=({
                    "UtilisateurCreateur":{"nom":"saber","mel":"frejsaber@yahoo.fr"},
                    "Groupe":{"nom":"ski"},
                    "description":"Assiettes Savoyardes",
                    "type":"Equitable",
                    "MontantTotal":42.60,
                    "DateCreation":dateCreationTransaction,
                    "participants":[
                      {"participant":{"nom":"tristan","mel":"tristan@gmail.com"},"montantDu":14.6,"montantReglé":0},
                      {"participant":{"nom":"netty","mel":"netty@gmail.com"},"montantDu":14.6,"montantReglé":0},
                      {"participant":{"nom":"seif","mel":"seifeddinefraj@live.fr"},"montantDu":14.6,"montantReglé":0}
                    ],
                    "statut":"Ouverte",
                    "DateDeFermeture":null
                    });
                console.log("a inseree",TransactionAAjouter);

                Transaction.insert(req.body);
                var objetInsere=Transaction.findOne();
                console.log("inseree",objetInsere);
                //(TransactionAAjouter);
                res.send();
 
            });
            
        })
          
     app.use(express.static(__dirname+'/client'));   
     app.listen(3000, function() {
     console.log("Server running...")
    
    })
})
