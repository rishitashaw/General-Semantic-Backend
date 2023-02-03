const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.js')

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config;

app.use(express.static(__dirname + '/static'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.htm');
});

app.use('/auth', authRoutes);

app.listen(PORT, () => console.log('listening on port ' + PORT));