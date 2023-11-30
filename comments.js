// Create web server using express
// Create a simple RESTful API for comments
// Comments are stored in a JSON file
// Comments are read from the JSON file and displayed on the page
// Comments can be added to the JSON file using a simple form
// Comments can be deleted from the JSON file using a simple link
// The API should support the following routes:
// GET /api/comments
// POST /api/comments
// DELETE /api/comments/:id
// The API should support the following requests:
// GET /api/comments
// POST /api/comments
// DELETE /api/comments/:id
// The API should support the following requests:
// GET /api/comments
// POST /api/comments
// DELETE /api/comments/:id
// The API should support the following requests:
// GET /api/comments
// POST /api/comments
// DELETE /api/comments/:id
// The API should support the following requests:
// GET /api/comments
// POST /api/comments
// DELETE /api/comments/:id
// The API should support the following requests:
// GET /api/comments
// POST /api/comments
// DELETE /api/comments/:id
// The API should support the following requests:
// GET /api/comments
// POST /api/comments
// DELETE /api/comments/:id
// The API should support the following requests:
// GET /api/comments
// POST /api/comments
// DELETE /api/comments/:id
// The API should support the following requests:
// GET /api/comments
// POST /api/comments
// DELETE /api/comments/:id

const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

// Get comments
app.get('/api/comments', (req, res) => {
    fs.readFile('./comments.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send(JSON.parse(data));
        }
    });
});

// Post comments
app.post('/api/comments', (req, res) => {
    fs.readFile('./comments.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            let comments = JSON.parse
