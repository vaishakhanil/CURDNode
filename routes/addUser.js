const express = require('express');
const router = new express.Router();
const { addUserPageContent } = require('../content');
const {createUser} = require('../utils/db');

// GET Route to display the Add User Page
router.get('/add', (req, res) => {
    res.render('addUser', addUserPageContent);
});


// POST Method to handle the insertion of data into the database
router.post('/add', async (req,res) => {
    const data = req.body;
    try {
        let saveStatus = await createUser(data);
        // Reditect to index page to display the table after insertion
        if(saveStatus) {
            res.redirect('/');
        }
    } catch(error) {
        // Throws error if there occurs any error during insertion
        res.status(500).json({
            error: "Unable to create user" + error
        });
    }
});

module.exports = router;