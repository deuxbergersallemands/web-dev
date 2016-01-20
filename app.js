var connect = require("connect");
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;


var db = new Db('deuxbergersallemands_web-dev', new Server('localhost', 27017));
var express=require("express");
/****************************************************/
var bodyParser = require('body-parser')
var md5 = require("md5")
var cookieParser = require('cookie-parser')


var url = "mongodb://localhost:27017/deuxbergersallemands_web-dev"
var app = express()

app.use(bodyParser.json())
app.use(cookieParser())

var getETag = function(body) {
    return md5(body)
}

app.set("etag", getETag)

MongoClient.connect(url, function(err, db) {

    db.collection("Utilisateur", function(err, Utilisateur) {
           app.use(express.static(__dirname+'/client'));
  
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
                            res.send(u.solde);
                        }
                        else{
                            res.status(500).send({ error: "Les cordonées que vous avez fournisses ne sont pas valides." });
                        }

                    }

                });
            });

            app.post('/inscription', function(req, res) {
                var melReq=req.body.mel;
                var NouveauUtilisateur= Utilisateur.findOne({"mel":melReq}, function(err, u) {
                  if (err) return err;
                  if (u==null){
                    UtilisateurAAjouter=req.body;
                    UtilisateurAAjouter.solde = 0;
                    Utilisateur.insert(UtilisateurAAjouter);
                    res.send();
                  }
                  else{
                    console.log("utilisateur existe déja :",u);
                    res.status(500).send({ error: "utilisateur existe déja" });
                  }
                });

            });



            app.get('/amis', function(req, res) {
                Utilisateur.find({}).toArray(function(err, amis) {
                    if (err) return next(err);
                  
                    res.send(amis);
                });
            });


            app.post('/amis',function(req,res){
                 Utilisateur.findOne({"mel":req.cookies.utilisateur}, function(err, utilisateur) {
                    if (err) return err;
                    if (utilisateur == null) {}
                    else {
                        var idAmi = new require('mongodb').ObjectID(req.body.id);
                        Utilisateur.findOne({'_id' : idAmi}, function(err, ami) {
                          if (err) res.send(err);
                          if (ami == null) {}
                          else {
                            Utilisateur.update({"mel":req.cookies.utilisateur}, 
                                            { $push : 
                                                 { amis: 
                                                    { $each: [{nom: ami.nom, mel: ami.mel}]}} });
                            res.send();
                          }
                        });
                    }


                 });
            });

            
            app.get('/amis/:id',function(req,res){
                var ami = new require('mongodb').ObjectID(req.params.id)
                 Utilisateur.findOne({'_id' : ami}, function(err, amis) {
                   if (err) return err;
                   if (amis == null) {
                     console.log("n'existe passss");
                   }
                   else {
                    res.send(amis);
                   }
                });
            });

            app.get('/relations', function(req, res){

                Utilisateur.find({'mel' : req.cookies.utilisateur}, {_id:0, amis:1}).toArray(function(err, amis) {
                    if (err) return next(err);
                  
                    res.send(amis);
                });

            });
             
 
            app.get('/solde', function(req, res) {
              var u=Utilisateur.findOne({'mel':req.cookies.utilisateur}, function(err, solde) {
                if (err) return err;
                if (solde == null) {

                }
                else {
                    var leSolde = "{\"solde\":" + solde.solde + "}";
                    res.send(leSolde);
                }
              });
            });

        });


        /**************** Collection Transaction******************/
        db.collection("Transaction", function(err, Transaction) {
            app.get('/transaction/:id',function(req,res){
                var test = new require('mongodb').ObjectID(req.params.id)
                 Transaction.findOne({'_id' : test}, function(err, transaction) {
                   if (err) return err;
                   if (transaction == null) {
                     console.log("n'existe passss");
                   }
                   else {
                    res.send(transaction);
                   }
                });
            });
            
            app.get('/tableauDeBord', function(req, res) {
                var users=Transaction.find({'preteur.mel' : req.cookies.utilisateur}).toArray( function(err, users) {
                    if (err) return next(err)
                    if (users == null)
                      res.status(404).end()
                    else{
                      res.send(users);
                    }
               })
            });

            app.get('/tableauDeBord/Transactions/Participant', function(req, res) {
                var users=Transaction.find({'participants.participant.mel' : req.cookies.utilisateur}).toArray( function(err, users) {
                    if (err) return res.send(err);
                    if (users == null)
                      res.status(404).end()
                    else{
                      res.send(users);
                    }
               })
            });

        app.get('/transaction/nouvelle',function(req,res){
            if(req!=null){
                var result = Transaction.find("req")
                if(result!=null){
                    res.result=result;
                    res.send();
                }
                else
                    console.log("reultat introuvable : app.get /transaction ")
            }
        });
    
        app.post('/transaction/nouvelle', function(req, res) { 
            var dateCreationTransaction= new Date();              
            Transaction.insert(req.body);
            res.send();

        });
    });

/**************** Collection Groupe******************/
    db.collection("Groupe", function(err, Groupe) {
        app.get('/groupe/:id',function(req,res){
            if(req!=null){
                var result =Groupe.findOne("req")
                if(result!=null){
                    res.result=result;
                    res.send();
                }
                else
                    console.log("resultat introuvable : app.get /groupe/One ")
            }
        });

      
 
        // Récupérer tous les groups dont l'utilisateur fait parti.
        app.get('/groupes',function(req,res){
            Groupe.find({'membres.mel' : req.cookies.utilisateur}).toArray( function(err, groupes) {
              if (err) res.send(err);
              if (groupes == null) {res.send(err);}
              else {
                    res.send(groupes);
                }

        });
    })
    
        app.post('/groupes/nouveau', function(req, res) {   
            console.log("post /groupes/nouveau")   
            console.log(req.body) ;      
            Groupe.insert(req.body);
            res.send();
        });
    })

    /**************** Collection Historique******************/
    db.collection("Historique", function(err, Historique) {
        app.get('/historique/:id',function(req,res){
            if(req!=null){
                var result =Historique.findOne("req")
                if(result!=null){
                    res.result=result;
                    res.send();
                }
                else
                    console.log("reultat introuvable : app.get /historique/One ")
            }
        });

        app.get('/historique',function(req,res){
            if(req!=null){
                var result =Historique.find("req")
                if(result!=null){
                    res.result=result;
                    res.send();
                }
                else
                    console.log("reultat introuvable : app.get /historique ")
            }
        });
    
        app.post('/historique/nouvelle', function(req, res) {             
            Historique.insert(req.body);
            res.send();
        });        
    })

    /**************///
          
     //app.use(express.static(__dirname+'/client'));   
     app.listen(3000, function() {
       console.log("Server running...")
    });
});
