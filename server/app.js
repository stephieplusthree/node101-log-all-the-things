const express = require('express');
// Node.js File System Module
const fs = require('fs');
const app = express();

//Agent, Time, Method, Resource, Version, Status

app.use((req, res, next) => {
// write your logging code here
    
    
    var agent    = req.get('User-Agent').replace(',', ' ');
    var time     = new Date().toISOString();
    var method   = req.method;
    var resource = req.url;
    var version  = 'HTTP/' + req.httpVersion;
    var status   = res.statusCode;

    //placeholder
    var fullLog  = [];

    fullLog.push(agent);
    fullLog.push(time);
    fullLog.push(method);
    fullLog.push(resource);
    fullLog.push(version);
    fullLog.push(status);
    console.log(fullLog.join(','));

    //fs.appendFile(path,data[,options], callback)
    fs.appendFile('log.csv', '\n' + fullLog + ',', function(err){
        if(err){console.log(err);}
    });

    next();
});

app.get('/', (req, res) => {
// write your code to respond "ok" here
    res.status(200).send('ok');
});

app.get('/logs', (req, res) => {
// write your code to return a json object containing the log data here

    //placeholder
    var logs = [];

    //fs.readFile method to read files
    fs.readFile('log.csv', 'utf8', function(err, data) {
        var lines = data.split('\n');
        for (let line = 1; line < lines.length; line++) {
            var lineItems = lines[line].split(',');
            var log = {
                Agent: lineItems[0],
                Time: lineItems[1],
                Method: lineItems[2],
                Resource: lineItems[3],
                Version: lineItems[4],
                Status: lineItems[5],
            };
            console.log(log);
            logs.push(log);
        };
        res.json(logs);
    });
});

module.exports = app;
