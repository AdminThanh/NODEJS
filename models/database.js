var mysql = require('mysql'); 
var db = mysql.createConnection({   
    host: 'localhost',     
    user: 'root',     
    password: '',     
    database: 'asmnodejs' 
});  
db.connect(function(err) {    
   if (err) throw err;    
   console.log('Da ket noi database'); 
}); 
module.exports = db; 