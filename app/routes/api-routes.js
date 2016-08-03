// Dependencies
// =============================================================
var amazon = require('amazon-product-api');
var client = amazon.createClient({
    awsId: "AKIAIOWFZ4KTTJAKNLFQ",
    awsSecret: "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",
    awsTag: "q0d9b-20"
});
//var Burgers	= require("../model/burgers.js"); // Pulls out the Character Model

// Routes
// =============================================================
module.exports = function(app) {

    app.get('/search', function(req, res) {
        client.itemSearch({
            director: 'Quentin Tarantino',
            actor: 'Samuel L. Jackson',
            searchIndex: 'DVD',
            audienceRating: 'R',
            responseGroup: 'ItemAttributes,Offers,Images'
        }).then(function(results) {
            console.log(results);
        }).catch(function(err) {
            console.log(err);
        });

    })

    // Search for Specific Character (or all characters) then provides JSON
    app.get('/api/watchList', function(req, res) {
        console.log("received request");

        // Otherwise display the data for all of the characters. 
        // (Note how we're using Sequelize here to run our searches)
        Burgers.findAll({})
            .then(function(result) {
                res.json(result);
            });


    });

    // If a user sends data to add a new character...
    app.post('/api/new', function(req, res) {

        // Take the request...
        var burger = req.body;

        // Create a routeName 


        // Then add the character to the database using sequelize
        Burgers.create({ burger_name: burger.burger_name })
            .then(function() {
                res.redirect('/');
            })

    });

    app.post('/api/update', function(req, res) {
        console.log(req)
        Burgers.update(
                //set value to be updated
                {
                    devoured: 1
                },
                // where clause/criteria
                {
                    where: {
                        id: req.body.id
                    }
                }
            )
            .then(function() {
                res.redirect('/');
            })
    });

}
