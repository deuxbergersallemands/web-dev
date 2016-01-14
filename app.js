//console.log("Begin server boot localhost', 27017");
var connect = require("connect");
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;


var db = new Db('deuxbergersallemands_web-dev', new Server('localhost', 27017));
var express=require("express");
/****************************************************/
var bodyParser = require('body-parser')
var md5 = require("md5")

var url = "mongodb://localhost:27017/test"
var app = express()

app.use(bodyParser.json()) // Nécessaire pour parser le body des requêtes PUT (Q5)

var getETag = function(body) {
    return md5(body)
}

app.set("etag", getETag)
//world_bank
//db.Utilisateur.find().forEach(printjson)
MongoClient.connect(url, function(err, db) {

    db.collection("Utilisateur", function(err, Utilisateur) {
    
            app.use(express.static(__dirname+'/client'));
            app.use("/tableauDeBord",function(){
                console.log("/tableauDeBord");
            })

        

        


   

        app.listen(3000, function() {
            console.log("Server running...")
        })
    })
})



/******************************************************/

/*


// Establish connection to db
db.open(
    function(err, db) {
        if(err==null){
            console.log("connexion reussite au serveur base de données réussite  localhost', 27017");
            console.log("demarrage de serveur http l'application localhost:3000 ");
            app.use(express.static(__dirname+'/client'));
            app.use("/tableauDeBord",function(){
                console.log("/tableauDeBord");
//                var cursor =db.Utilisateur.find().

            })

           

            app.listen(3000);
            console.log(" serveur http lancé sur le port 3000");
        }
        else
            console.log("probleme de connexion au serveur Mongod ...")
        
}
);
*/
