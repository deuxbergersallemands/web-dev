conn = new Mongo(
   );
db = conn.getDB('deuxbergersallemands_web-dev'
   );
db = db.getSiblingDB('deuxbergersallemands_web-dev'
   );


db.createCollection( "Utilisateur",
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
//db.accounts.createIndex( { "mail": 1 }, { unique: true }    );
db.Utilisateur.insert(
   {
      "nom":"saber",
      "mail":"frejsaber@yahoo.fr",
      "MotDePasse":"MotDePasseDeSaber",
      "solde":0,
      "amis":[
         {"nom":"tristan","mail":"tristan@gmail.com"},
         {"nom":"netty", "mail" :"netty@gmail.com"}
      ]
   }
   );
db.Utilisateur.insert(
   {
      "nom":"tristan",
      "mail":"tristan@gmail.com",
      "MotDePasse":"MotDePasseDeTristan",
      "solde":0,
      "amis":[
         {"nom":"saber","mail":"frejsaber@yahoo.fr"},
         {"nom":"netty", "mail" :"netty@gmail.com"}
         ]
   }
   );
db.Utilisateur.insert(
   {
      "nom":"netty",
      "mail":"netty@gmail.com",
      "MotDePasse":"MotDePasseNetty",
      "solde":0,
      "amis":[
         {"nom":"tristan","mail":"tristan@gmail.com"},
         {"nom":"saber", "mail" :"frejsaber@yahoo.fr"}
         ]
      }
   );
db.Utilisateur.insert(
   {
      "nom":"seif",
      "mail":"seifeddinefraj@live.fr",
      "MotDePasse":"MotDePasseSeif",
      "solde":0,
      "amis":[
         {"nom":"tristan","mail":"tristan@gmail.com"},
         {"nom":"saber", "mail" :"frejsaber@yahoo.fr"},
         {"nom":"netty", "mail" :"netty@gmail.com"}
         ]
      }
   );


db.createCollection( "Croupe"
   );
//db.accounts.createIndex( { "nom": 1 }, { unique: true }    );
db.Groupe.insert(
   {
      "nom":"ski",
      "UtilisateurCreateur":{"nom":"saber","mail":"frejsaber@yahoo.fr"}, 
      "description":"voyage scolaire au Mont-blanc",
      "membres":[
         {"nom":"tristan","mail":"tristan@gmail.com"},
         {"nom":"saber", "mail" :"frejsaber@yahoo.fr"},
         {"nom":"netty", "mail" :"netty@gmail.com"},
         {"nom":"seif","mail":"seifeddinefraj@live.fr"}
      ]
   }
   );



db.createCollection("Historique"
   );
var dateHistorique = new Date(
   );
db.Historique.insert({"date":dateHistorique,"texte":"Saber à ajouter netty à l'evenement ski"}
   );
db.Historique.insert({"date":dateHistorique,"texte":"Saber à ajouter tristan à l'evenement ski"}
   );
db.Historique.insert({"date":dateHistorique,"texte":"Saber à ajouter seif à l'evenement ski"}
   );

db.createCollection("Transaction",   {
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

var dateCreationTransaction = new Date(
   );
db.Transaction.insert({
   "UtilisateurCreateur":{"nom":"saber","mail":"frejsaber@yahoo.fr"},
   "Groupe":{"nom":"ski"},
   "description":"Assiettes Savoyardes",
   "type":"Equitable",
   "MontantTotal":42.60,
   "DateCreation":dateCreationTransaction,
   "participants":[
      {"participant":{"nom":"tristan","mail":"tristan@gmail.com"},"montantDu":14.6},
      {"participant":{"nom":"netty","mail":"netty@gmail.com"},"montantDu":14.6},
      {"participant":{"nom":"seif","mail":"seifeddinefraj@live.fr"},"montantDu":14.6},
      {"participant":{"nom":"saber","mail":"frejsaber@yahoo.fr"},"montantDu":-42.60}
   ],
   "statut":"Ouverte",
   "DateDeFermeture":null
}
);

var dateCreationTransaction = new Date(
   );
var dateArrangement = new Date(
   );
db.Transaction.insert({
   "UtilisateurCreateur":{"nom":"tristan","mail":"tristan@gmail.com"},
   "Groupe":{"nom":"ski"},
   "description":"Fondue savoyarde",
   "type":"Equitable",
   "MontantTotal":96.56,
   "DateCreation":dateCreationTransaction,
   "participants":[
      {"participant":{"nom":"tristan","mail":"tristan@gmail.com"},"montantDu":-96.56},
      {"participant":{"nom":"netty","mail":"netty@gmail.com"},"montantDu":32.19},
      {"participant":{"nom":"seif","mail":"seifeddinefraj@live.fr"},"montantDu":32.19},
      {"participant":{"nom":"saber","mail":"frejsaber@yahoo.fr"},"montantDu":32.19}
   ],
   "statut":"Arrongée",
   "DateDeFermeture":dateArrangement
}
);




