const express = require('express');
const Datastore = require('nedb');

const { request, response } = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json());

const database = new Datastore('geoloaction.db');
database.loadDatabase();

app.post('/api', (request, response) => {
    console.log("Yay, got an request");
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json({
        status: 'success',
        timestamp:  timestamp,
        latitude:   data.lat,
        longitude:  data.lon
    });
    }
)
    