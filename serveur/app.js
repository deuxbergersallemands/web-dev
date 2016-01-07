console.log("Begin server boot localhost', 27017");
var connect = require("connect");
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;


var db = new Db('deuxbergersallemands_web-dev', new Server('localhost', 27017));


// Establish connection to db
db.open(
    function(err, db) {
        if(err==null){
            console.log("connexion reussite au serveur base de données réussite  localhost', 27017");
            console.log("demarrage de serveur http l'application localhost:3000 ");
            var app=connect.createServer(
            function(req,res){
                res.end("bonjour, il reste l'interaction de serveur avec les requete à developper ...");
            }

        );
        app.listen(3000);
        console.log(" serveur http lancé sur le port 3000");
        }
        else
            console.log("probleme de connexion au serveur Mongod ...")
        
}
);
