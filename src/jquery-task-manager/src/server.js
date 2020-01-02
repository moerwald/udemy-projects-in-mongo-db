const express = require('express');
const app = express();

const server = app.listen(7000, () => {
    console.log(`Server is running under ${server.address().port}`);
});


app.set('view engine', 'pug');
//app.use(express.static(__dirname ));
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) =>{
    res.render("index");
});




