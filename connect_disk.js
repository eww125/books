const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/book_db.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the book database.');
});

db.serialize(() => {
  db.each(`SELECT * FROM books`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.name);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
