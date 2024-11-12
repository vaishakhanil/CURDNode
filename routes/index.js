// Importing the express module, add and update functions
const express = require('express');
const router = new express.Router();
const addUser = require('./addUser');
const updateUser = require('./updateUser');

// Importing the display Page contents
const { displayUserPageContent } = require('../content');

// Importing the utils function to fetch users and counts from the database
const {getUsers, getUsersCount} = require('../utils/db');

router.use(addUser);
router.use(updateUser);

// GET Method to display the Users
router.get('/', async (req,res) => {
    let {page, limit} = req.query
    page = page || 1;
    limit = limit || 10;

    // Getting the Users and counts
    let users = await getUsers(page, limit);
    let count = await getUsersCount();
    
    // Setting the number of pages and the current page
    displayUserPageContent.pages = Math.ceil(count / 10);
    displayUserPageContent.current = page

    // assigning the users to content object
    displayUserPageContent.users = users;

    // Rendering the Index page
    res.render('index', displayUserPageContent);
});

module.exports = router;