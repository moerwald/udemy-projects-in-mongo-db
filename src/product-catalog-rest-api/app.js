
// "imports"
const express = require('express');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');

const db = mongojs('catalog', ['products']);
const port = 3000;

const app = express();
app.use(bodyParser.json());

// Home
app.get('/', (req, res, next) => {
    res.send('Please use /api/products');
});

// Fetch all products
app.get('/api/products', (req, res, next) => {
    db.products.find((err, docs) => {
        if (err) {
            res.send(err);
            return;
        }
        console.log('Products found ...');
        res.json(docs);
    });
});

// Fetch single product
app.get('/api/products/:id', (req, res, next) => {
    db.products.findOne(
        { _id: mongojs.ObjectID(req.params.id) },
        (err, doc) => {
            if (err) {
                res.send(err);
                return;
            }
            var id = mongojs.ObjectID(req.param.id);
            console.log('Product found ...');
            res.json(doc);
        });
});

// Create new product
app.post('/api/products', (req, res, next) => {
    db.products.insertOne(req.body, (err, doc) => {
        if (err) {
            res.send(err);
            return;
        }

        console.log('Inserted doc');
        res.json(doc);
    });
});

// Update existing product
app.put('/api/products/:id', (req, res, next) => {
    db.products.findAndModify({
        query: {
            _id: mongojs.ObjectID(req.params.id)
        },
        update: {
            $set: {
                name: req.body.name,
                category: req.body.category,
                details: req.body.details,
                description: req.body.description
            }
        },
        new: true
    },
        (err, doc) => {
            if (err) {
                res.send(err);
                return;
            }

            console.log("Updating product");
            res.json(doc);

        });
});

// Delete existing product
app.delete('/api/products/:id', (req, res, next) => {
    db.products.remove(
        { _id: mongojs.ObjectID(req.params.id) },
        (err, doc) => {
            if (err) {
                res.send(err);
                return;
            }

            console.log("Removing product");
            res.json(doc);
        }
    );
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});
