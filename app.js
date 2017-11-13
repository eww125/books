var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('books.db');
var check;
db.serialize(function() {

  //db.run("CREATE TABLE if not exists user_info (info TEXT)");
  //var stmt = db.prepare("INSERT INTO user_info VALUES (?)");
  //for (var i = 0; i < 10; i++) {
  //    stmt.run("Ipsum " + i);
  //}
  //stmt.finalize();

  db.each("SELECT * FROM books", function(err, row) {
      console.log(row.title + " : " + row.author_last_name + ", " +
    row.author_first_name + " : " + row.isbn);
      console.log('test')
  });
});

db.close();
