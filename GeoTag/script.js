var mysql = require('mysql');

var config = require('./config.js');
   
config.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  //    function success(position) {
  //   const latitude  = position.coords.latitude;
  //   const longitude = position.coords.longitude;

  //   status.textContent = '';
  //   mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  //   mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  // }
  

  //   function error() {
  //   status.textContent = 'Unable to retrieve your location';
  // }

  // if(!navigator.geolocation) {
  //   status.textContent = 'Geolocation is not supported by your browser';
  // } else {
  //   status.textContent = 'Locating…';
  //   navigator.geolocation.getCurrentPosition(success, error);
  // }

  
  console.log('Connected to the MySQL server.');
  let sql = `INSERT INTO geotagging(id,longitude,latitude)
               VALUES(1,${latitude},${longitude}`;

    config.query(sql);
    config.end;
});




// function geoFindMe() {

//   const status = document.querySelector('#status');
//   const mapLink = document.querySelector('#map-link');

//   mapLink.href = '';
//   mapLink.textContent = '';

//   function success(position) {
//     const latitude  = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     status.textContent = '';
//     mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
//     mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
//   }

//   function error() {
//     status.textContent = 'Unable to retrieve your location';
//   }

//   if(!navigator.geolocation) {
//     status.textContent = 'Geolocation is not supported by your browser';
//   } else {
//     status.textContent = 'Locating…';
//     navigator.geolocation.getCurrentPosition(success, error);
//   }

// }

// document.querySelector('#find-me').addEventListener('click', geoFindMe);