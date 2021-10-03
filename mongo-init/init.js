conn = new Mongo();
db = conn.getDB("Langdex");


db.language.insert({ id: 1, name: 'java', image_url: 'www.google.com'});
db.language.insert({ id: 2, name: 'java', image_url: 'www.google.com'});
db.language.insert({ id: 3, name: 'java', image_url: 'www.google.com'});