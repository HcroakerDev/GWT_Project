/**
 * A module used to control the functionality of posts
 * @exports getPosts
 * @exports addPOsts 
 */
var conn = require('../db_scripts/connection');
const { validationResult } = require('express-validator');

/**
 * A function used to get posts, uses the pagination middleware
 */
exports.getPosts = (req, res) => {
    res.send(res.results);
}

/**
 * A function to add a post
 */
exports.addPost = (req, res) => {

    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // There are errors. Render form again with sanitized values/errors messages.
        // Error messages can be returned in an array using `errors.array()`.
        res.status(400).send(errors.array()[0]);
    }
    else {

        // Data from form is valid.
        // Create Object
        var obj = {
            id: null,
            title: req.body.title,
            body: req.body.body,
            subjectURL: req.body.subjectURL ? req.body.subjectURL : null,
            category: req.body.category,
            posted: new Date()
        }

        // Create query to insert data with decreased risk of sql injection
        let query = "INSERT INTO posts (title, body, subjectURL, category, posted) VALUES (?, ?, ?, ?, ?)";
        conn.query(query, [obj.title, obj.body, obj.subjectURL, obj.category, obj.posted], (err,result,fields)=>{
            if(err) res.status(400).send("Invalid Data"); // Would generally use some kind of logging framework on top of this.

            // Send the uploaded object with the id back to the client so the page doesn't need to be reloaded
            obj.id=result.insertId;
            res.send(obj);
        })
    }
    
}