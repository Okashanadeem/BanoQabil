// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Route: Home page - sends plain text response
app.get('/', (req, res) => res.send('Home Page'));

// Route: About page
app.get('/about', (req, res) => res.send('About Page'));

// Route: Contact page
app.get('/contact', (req, res) => res.send('Contact Page'));

// Route: API endpoint - sends a JSON array of users
app.get('/api/users', (req, res) =>
  res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }])
);

// Catch-all route: handles all undefined routes with 404 status
app.use((req, res) => res.status(404).send('404 Not Found'));

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
