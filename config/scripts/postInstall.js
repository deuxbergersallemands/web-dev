conn = new Mongo();
db = conn.getDB('deuxbergersallemands_web-dev');
db = db.getSiblingDB('deuxbergersallemands_web-dev');


db.createCollection("Utilisateur",
   {
      validator: { $or:
         [
            { phone: { $type: "string" } },
            { mail: { $regex: /@mongodb\.com$/ } },
            //{ status: { $in: [ "Unknown", "Incomplete" ] } }
         ]
      }
   }

);
//db.accounts.createIndex( { "mel": 1 }, { unique: true }    );
db.Utilisateur.insert(
   {
      "nom":"saber",
      "mel":"frejsaber@yahoo.fr",
      "MotDePasse":"MotDePasseDeSaber",
      "solde":0,
      "amis":[
         {"nom":"tristan","mel":"tristan@gmail.com"},
         {"nom":"netty", "mel" :"netty@gmail.com"}
      ]
   }
   );
db.Utilisateur.insert(
   {
      "nom":"tristan",
      "mel":"tristan@gmail.com",
      "MotDePasse":"MotDePasseDeTristan",
      "solde":0,
      "amis":[
         {"nom":"saber","mel":"frejsaber@yahoo.fr"},
         {"nom":"netty", "mel" :"netty@gmail.com"}
         ]
   }
   );
db.Utilisateur.insert(
   {
      "nom":"netty",
      "mel":"netty@gmail.com",
      "MotDePasse":"MotDePasseNetty",
      "solde":0,
      "amis":[
         {"nom":"tristan","mel":"tristan@gmail.com"},
         {"nom":"saber", "mel" :"frejsaber@yahoo.fr"}
         ]
      }
   );
db.Utilisateur.insert(
   {
      "nom":"seif",
      "mel":"seifeddinefraj@live.fr",
      "MotDePasse":"MotDePasseSeif",
      "solde":0,
      "amis":[
         {"nom":"tristan","mel":"tristan@gmail.com"},
         {"nom":"saber", "mel" :"frejsaber@yahoo.fr"},
         {"nom":"netty", "mel" :"netty@gmail.com"}
         ]
      }
   );


db.createCollection( "Groupe");
//db.accounts.createIndex( { "nom": 1 }, { unique: true }    );
db.Groupe.insert(
   {
      "nom":"ski",
      "UtilisateurCreateur":{"nom":"saber","mel":"frejsaber@yahoo.fr"}, 
      "description":"voyage scolaire au Mont-blanc",
      "membres":[
         {"nom":"tristan","mel":"tristan@gmail.com"},
         {"nom":"saber", "mel" :"frejsaber@yahoo.fr"},
         {"nom":"netty", "mel" :"netty@gmail.com"},
         {"nom":"seif","mel":"seifeddinefraj@live.fr"}
      ]
   }
   );



db.createCollection("Historique");
var dateHistorique = new Date();
db.Historique.insert({"date":dateHistorique,"texte":"Saber à ajouter netty à l'evenement ski"}
   );
db.Historique.insert({"date":dateHistorique,"texte":"Saber à ajouter tristan à l'evenement ski"}
   );
db.Historique.insert({"date":dateHistorique,"texte":"Saber à ajouter seif à l'evenement ski"}
   );

db.createCollection("Transaction",{
      validator: { $or:
         [
            { 
               type: { $in: [ "Equitable", "Exact" ] },
               statut: { $in: [ "Ouverte", "Fermée","Annulée","Arrongée" ] }
            }
         ]
      }
   }

);

var dateCreationTransaction = new Date();
db.Transaction.insert({
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
}
);

var dateCreationTransaction = new Date();
var dateArrangement = new Date();
db.Transaction.insert({
   "UtilisateurCreateur":{"nom":"tristan","mel":"tristan@gmail.com"},
   "Groupe":{"nom":"ski"},
   "description":"Fondue savoyarde",
   "type":"Equitable",
   "MontantTotal":100,
   "DateCreation":dateCreationTransaction,
   "participants":[
      {
         "participant":{"nom":"tristan","mel":"tristan@gmail.com"},
         "montantDu":25,
         "montantReglé":25
      },
      {
         "participant":{"nom":"netty","mel":"netty@gmail.com"},
         "montantDu":25,
         "montantReglé":0
      },
      {
         "participant":{"nom":"seif","mel":"seifeddinefraj@live.fr"},
         "montantDu":25,
         "montantReglé":0
      },
      {
         "participant":{"nom":"saber","mel":"frejsaber@yahoo.fr"},
         "montantDu":25,
         "montantReglé":15
      }
   ],
   "statut":"Arrongée",
   "DateDeFermeture":dateArrangement
}
);




