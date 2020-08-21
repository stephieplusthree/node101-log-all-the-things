Instructions

Open a terminal

Clone your starter files from Github and open the project in VS code.

Run: npm install to install the dependences.

Agent,Time,Method,Resource,Version,Status 

2) Write the code required to generate a log line for every request following this format:

Agent - the user-agent found in the request's header. You may find it helpful to reformat this (some user-agent strings may contain commas)

Time - use the ISO date standard

Method - one of the following methods: GET, POST, DELETE, etc.

Resource - the path and the file requested

Version - the http version of the request, check the request object for this value and be prepared to format the string

Status - a number that is most likely 200, 404, or 500

Here is an example of what the contents of the file should look like after a few requests have been made to http://localhost:3000:

Agent,Time,Method,Resource,Version,Status
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML like Gecko) Chrome/58.0.3029.110 Safari/537.36,2017-06-26T22:39:51.400Z,GET,/,HTTP/1.1,200
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:53.0) Gecko/20100101 Firefox/53.0,2017-06-26T22:40:05.401Z,GET,/,HTTP/1.1,200
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:53.0) Gecko/20100101 Firefox/53.0,2017-06-26T22:40:05.448Z,GET,/favicon.ico,HTTP/1.1,200
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:53.0) Gecko/20100101 Firefox/53.0,2017-06-26T22:40:05.468Z,GET,/favicon.ico,HTTP/1.1,200
Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:53.0) Gecko/20100101 Firefox/53.0,2017-06-26T22:40:12.738Z,GET,/,HTTP/1.1,200
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML like Gecko) Version/10.1.1 Safari/603.2.4,2017-06-26T22:40:26.310Z,GET,/,HTTP/1.1,200

3) Write the code so your server will return "ok" to the visitor (you don't need to actually serve up a webpage) and respond with 200 status code when users navigate to http://localhost:3000:. In this exercise you may assume that all responses will return a 200 status code.

4) Write the code so your server will return a JSON object with all the contents of the log file when users navigate to http://localhost:3000/logs

[
    {
        "Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Time": "2017-06-26T22:39:51.400Z",
        "Method": "GET",
        "Resource": "/",
        "Version": "HTTP/1.1"
        "Status": "200"
    },
    {
        "Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:53.0) Gecko/20100101 Firefox/53.0",
        "Time": "2017-06-26T22:40:05.401Z",
        "Method": "GET",
        "Resource": "/",
        "Version": "HTTP/1.1"
        "Status": "200"
    }
        ...
]

You may find it helpful to use your browser to make a few requests to your server to verify your code is working as expected.

Type npm start to launch your project on a local webserver.

//Exit Criteria:

Every request to your server must be logged to the console

Every request to your server must be logged to a file

The log file is named log.csv and must be csv format
Must use fs.appendFile, do not use fs.appendFileSync
Expose an endpoint (does not require authentication) http://localhost:3000/logs that will return a json object with all the logs

All tests must pass

//Bonus

Typically, a new logfile is created periodically, and the old logfile is renamed by appending a "1" to the name. Each time a new log file is started, the numbers in the file names of old logfiles are increased by one, so the files "rotate" through the numbers (thus the name "log rotation"). Old logfiles whose number exceeds a threshold can then be deleted or archived off-line to save space.

Rotate the logs so that they never exceed 20 lines in any given file (eg. log.csv, log1.csv, log2.csv).

Refactor, as needed, so that your app will respond with 404 if the resource requested is not found.

Project Submission

To submit this project, please deploy this website using Now.

# navigate to the project

$ cd ~/projects/{project-name}
                
# run "now" to deploy the site

$ now

After running that command, you should see the following output:

> Deploying ~/projects/{project-name} under your@email.com

> Ready! https://{project-name}-skckceswsd.now.sh (copied to clipboard)