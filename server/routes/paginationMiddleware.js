const conn = require('../db_scripts/connection');
const { validationResult } = require('express-validator');

/**
 * A middleware module to paginate data.
 * 
 * @param {
 * table: string - The table to retrieve data from,
 * query: string - The starting query to retrieve data
 * } options 
 * 
 * @output pagination
 */
const pagination = (options) => {
    return (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            // Error messages can be returned in an array using `errors.array()`.
            res.status(400).send(errors.array()[0]);
        }
        else {
            // Get the page and limit from the query
            const page = parseInt(req.query.page);
            const limit = parseInt(req.query.limit);

            // Create starting point
            const start = (page - 1) * limit;
            let results = {};

            // Get the total number of records so we can send it to the client
            const countQuery = `SELECT COUNT(*) AS total FROM ${options.table}`; 
            conn.query(countQuery, (err,result,fields)=>{
                if (err) res.status(400).send("Invalid Data");

                let total = result[0].total;
                results.total = total;

                // Create a full query and gather the data based on the starting point
                try {
                    let queryExtension = " LIMIT ?,?";
                    let fullQuery = options.query + queryExtension; // Add to the existing query
                    conn.query(fullQuery, [start, limit], (err,result,fields)=>{
                        if (err) res.status(400).send("Invalid Data");
                        
                        // Send results to the next function
                        results.results = result;
                        res.results = results;
                        next();
                    });
                } catch (e) {
                    res.status(500).json({ message: e.message })
                }
            })
        }
    }
}

module.exports = pagination;