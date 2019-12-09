const express = require('express');
const { body, query } = require('express-validator');
var pagination = require('./paginationMiddleware.js');
const { getPosts, addPost } = require('../controllers/postsController');
var router = express.Router();

/* 
- Posts route folder
- Use pagination as a route-level middleware
- Use Controllers for functionality
*/
router.route('/')
.get(
    query('page', 'Invalid Page Parameter').trim().escape().exists().isInt(),
    query('limit', 'Invalid Limit Parameter').trim().escape().exists().isInt(),
    pagination({
    "table": "posts",
    "query": "SELECT * FROM posts ORDER BY posted DESC"
}), getPosts)
.post(
    body('title', 'Empty Title').trim().escape().exists({checkFalsy: true, checkNull: true}),
    body('body', 'Empty Body').trim().escape().exists({checkFalsy: true, checkNull: true}).isLength({max: 1000}).withMessage("Body Too Long"),
    body('category', 'Empty Category').trim().escape().exists({checkFalsy: true, checkNull: true}),
    body('subjectURL', 'Incorrect URL').optional().isURL({require_valid_protocol: true}),
    addPost)

module.exports = router;