const express = require('express');
const fs = require('fs');
const app = express();

//Agent, Time, Method, Resource, Version, Status

app.use((req, res, next) => {
// write your logging code here
    
    const userAgent = req.headers['user-agent'].replace(',','');
    //console.log("userAgent", userAgent)

    const time = new Date();
    const userTime = time.toISOString();
    //console.log("userTime", userTime)

    const userMethod = req.method;
    //console.log("userMethod", userMethod)
    
    const userURL = req.url;
    //console.log("userURL", userURL)
    
    const version = 'HTTP/' + req.httpVersion;
    //console.log("version", version)

    const status = res.statusCode;
    //console.log("status", status)
    
    const logger = userAgent + ',' + userTime + ',' + userMethod + ',' + userURL + ',' + version + ',' + status + '\n'; 
    //console.log("logger", logger)
    
});

app.get('/', (req, res) => {
// write your code to respond "ok" here

});

app.get('/logs', (req, res) => {
// write your code to return a json object containing the log data here

});

module.exports = app;
