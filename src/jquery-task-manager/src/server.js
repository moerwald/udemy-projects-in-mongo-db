const express = require('express');
const app = express();

const server = app.listen(7000, () => {
    console.log(`Server is running under ${server.address().port}`);
});


app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:23-+Wert@cluster0-ykflb.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



app.get('/', (req, res) =>{
    res.render("index");
});




