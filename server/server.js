const express = require('express');
const routes = require('./routes/index.js');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

// Serve angular app
app.use(express.static(path.join(__dirname, '/dist/client/')));
app.get('*', function(req, res){
    res.sendFile(path.resolve('dist/client/index.html'));
});

const port = process.env.PORT || "3000";
app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})