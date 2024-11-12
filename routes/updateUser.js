// Importing Express, Router, the contents for update page and 
// the helper functions to handle database operations
const express = require('express');
const router = new express.Router();
const { updateUserPageContent } = require('../content');
const {findUserByID, editUser, deleteUser} = require('../utils/db');

// GET Request to display User Update UI
router.get('/update', async (req, res) => {
    try {
        const id = req.query.id;
        const user = await findUserByID(id);
        
        // Throw error if there are no users returned from MongoDB
        if(!user) {
            throw "Error: No User Found"
        }

        // Add the ID and user data into content object
        updateUserPageContent.id = id;
        updateUserPageContent.user = user;

        // Render the User Update Page
        res.render('updateUser', updateUserPageContent);
    } catch (error) {
        // Redirect to 404 if there are any errors
        res.redirect('/404')
    }
});

// POST Method for User Info update
router.post('/update', async (req, res) => {
    try {
        // Get the ID from query param
        const id = req.query.id;
        // Get the data from request body
        const data = req.body;

        // Edit the user by ID
        const updateStatus = await editUser(id, data);
        
        // When user is successfully updated redirect to index page to display the users
        res.redirect('/')
    } catch (error) {
        
        // Redirect to 404 if there are any errors
        res.redirect('/404')
    }
});

// Delet users from the database
router.delete('/delete', async (req,res) => {
    try {
        // Get the id from query param
        const id = req.query.id;
        
        // Delete user by the user id
        const deleteStatus = await deleteUser(id);
        
        //Return 200 after successful deletion
        res.status(200).send({msg: deleteStatus});
    } catch( error) {
        // Redirect to 404 if there are any errors
        res.redirect('/404')
    }
})

module.exports = router;