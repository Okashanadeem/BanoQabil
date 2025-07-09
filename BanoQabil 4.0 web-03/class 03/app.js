// Import the built-in 'http' module to create a web server
const http = require('http');

// Create the server and define request-response logic
const server = http.createServer((req, res) => {
    // Log the request and response objects (for debugging)
    console.log(req);
    console.log(res);

    // Set the response header with status 200 and content type as plain text
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Route handling based on request URL
    if (req.url == '/') {
        res.end("Home Page");              // Respond with "Home Page" for root
    } else if (req.url == '/about') {
        res.end("About Page");             // Respond with "About Page"
    } else if (req.url == '/contact') {
        res.end("Contact Page");           // Respond with "Contact Page"
    } else {
        res.end("Wrong Route");            // Respond with default message
    }
});

// Start the server on port 3000 and log when it's running
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
