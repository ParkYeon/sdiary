var mongodb = require('mongodb'),
Db = mongodb.Db;
 
var db = new Db('sdiary', new Server(process.env["ds029950.mongolab.com"], process.env["29950"], {}));
 
db.open(function(err, db) {      
    // 인증
   db.authenticate(USERID, PASSWORD, function() {
      if (err) { sys.debug("DB Authentication error!"); }
                 
      db.collection("test_collection", function(err, collection) {   
      }); 
   });

   db.collection("mynewcollection", function(err, collection) {
      collection.find({"cmd":cmd}, {"sort":"order"}, function(err, cursor) {
         cursor.each(function(err, item) {
            if (item != null) {
               // Do something
            }
                
            if (item != null) {} // 반복문 끝
         });
         db.close();
      });   
   }); 
});
