// Dependencies
// =============================================================
var Orders = require("../model/amazon.js"); 

var amazon = require('amazon-product-api');
var client = amazon.createClient({
    awsId: "AKIAIOWFZ4KTTJAKNLFQ",
    awsSecret: "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",
    awsTag: "q0d9b-20"
});


// Routes
// =============================================================
module.exports = function(app) {
    //takes searched keywords - uses amazon api and sends results back to client
    app.post('/search', function(req, res) {
        console.log("lajdflkjsaldfjsdlfj" + req.body.new_order);
       var newSearch = req.body.new_order
        client.itemSearch({
            keywords: newSearch,
            responseGroup: 'ItemAttributes,Offers,Images'
        }).then(function(results) {
            res.json(results);
        }).catch(function(err) {
            console.log(err);
        });

    });

    //gets a list of what is in data base 
    app.get('/api/orderList', function(req, res) {
        console.log("received request");

        // Otherwise display the data for all of the characters. 
        // (Note how we're using Sequelize here to run our searches)
        Orders.findAll({})
            .then(function(result) {
                res.json(result);
            });


    });

    // Creates a new item in database
    app.post('/api/new', function(req, res) {

        // Take the request...
        var order = req.body;

        // Create a routeName 


        // Then add the character to the database using sequelize
       Orders.create({ ASIN : order.ASIN, Title: order.Title, Price: order.Price })
           .then(function() {
                res.redirect('/');
         })

    });

   

}
