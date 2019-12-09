const express = require('express');
var router = express.Router();
var posts = require('./posts');

/**
 * A module to hold the api routes
 * 
 * @exports router
 */

// Routes that can be easily extended and are clean.
router.use('/posts', posts);

module.exports = router;