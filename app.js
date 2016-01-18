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
                var result=false;
                    console.log("/inscription-->req.body ###############################################################");
                    console.log(req.body);

                    var melReq=req.body.mel;
                    var NouveauUtilisateur= Utilisateur.findOne({"mel":melReq}, function(err, u) {
                    if (err) return next(err)
                   // if (u.mel ==req.body.mel){
                    if (u==null){
                        console.log("il n'existe pas un utilisateur avec le mel specifié :",u);
                        //ajouter NouveauUtilisateur à la collection Utilisateur
                        UtilisateurAAjouter=req.body;
                        console.log("à ajouter ",UtilisateurAAjouter);
                        Utilisateur.insert(UtilisateurAAjouter);
//                        db.inventory.insert(NouveauUtilisateur);

                         res.send();
                       // res.status(500).send({ error: "Les cordonées que vous avez fournisses ne sont pas valides." });

                                         }
                    else{
                           console.log("utilisateur existe déja :",u);
                       // console.log(u);
                         res.status(500).send({ error: "utilisateur existe déja" });
                     }

                });
            });  


           

            app.post('/transaction/nouvelle', function(req, res, next) {
                console.log(req.body);
                if (true) { // si le nom d'utilisateur / mdp sont bons

                  res.send();
                }
                else {  // envoyer erreur
                  res.status(500).send({ error: "On n'a pas pu enregistrer votre transaction." });
                }
                next()
            }); 



            app.use(express.static(__dirname+'/client'));   

        

        


   

        app.listen(3000, function() {
            console.log("Server running...")
        })
    })
})



/******************************************************/
/*
le chemin possible pour le client
'/'
'/inscription'
'/tableauDeBord'
'/historique'
'/transaction/nouvelle'
'/transaction/:id'
'/relations'
*/




/*


// Establish connection to db
db.open(
    function(err, db) {
        if(err==null){
            console.log("connexion reussite au serveur base de données réussite  localhost', 27017");
            console.log("demarrage de serveur http l'application localhost:3000 ");
<<<<<<< Updated upstream
            app.use(express.static(__dirname+'/client'));
            app.use("/tableauDeBord",function(){
                console.log("/tableauDeBord");
//                var cursor =db.Utilisateur.find().

            })

           
=======

            app.use(bodyParser.json())

            app.post('/', function(req, res, next) {
                console.log(req.body);
                res.send()
                next()
            });   

            app.use(express.static(__dirname+'/client'));           

>>>>>>> Stashed changes

            app.listen(3000);
            console.log(" serveur http lancé sur le port 3000");
        }
        else
            console.log("probleme de connexion au serveur Mongod ...")
        
}
);
*/
