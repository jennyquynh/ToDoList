//imports
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();


//connect to mongodb
const db = require('./config/keys').MongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB connected.'))
.catch(err => console.log(err));


//port config
const port = 5000;


//middleware
app.use(cors());
app.use(bodyparser.json());


//testing server
app.get('/', (req, res) => {
    res.send('apple');
})


//routes
const route = require('./routes/route');
app.use('/api', route);



//static files
app.use(express.static(path.join(__dirname, 'public')));



//start server
app.listen(port,() => {
    console.log('Server started on port: ' + port);
})