const express = require('express');
const Datastore = require('nedb');

const { request, response } = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json());

const database = new Datastore('geoloaction.db');
database.loadDatabase();

app.get('/api', (request, response) => {
    database.find({}, (err,data) => {
        if (err){
            console.log(err.body);
            response.end;
            return;
        }
        else {
            response.json(data);
        };
    });
});

app.post('/api', (request,response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
}) 
    