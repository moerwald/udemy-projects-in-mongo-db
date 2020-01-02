# udemy-mongo-db-product-catalog-rest-api

Simple project of Udemy "projects-in-mongod" course, which allows CRUD operations for mondodb. The base idea is to store product information in the database, where the base db-"model" looks like this:

```
{
    "name":"Amazon Fire Tablet",
    "category":"Electronics",
    "model":"B00TSUGXKE",
    "price":49.99,
    "image":"https://images-na.ssl-images-amazon.com/images/I/61Agob8tdBL._AC_SL1000_.jpg",
    "details":"Beautiful 7 inch display"
}

```

The app is based on node.js. To start the app go the `src` folder and type `npm start`. The app assumes that a mongodb instance is running on your localhost (bound to the default monodb port). You can test the differenct operations via tool like `RestEasy`, `Postman`, ...

