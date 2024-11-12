const express = require('express');
const router = new express.Router();
const { addUserPageContent } = require('../content');
const {createUser} = require('../utils/db');

router.get('/add', (req, res) => {
    res.render('addUser', addUserPageContent);
});

router.post('/add', async (req,res) => {
    const data = req.body;
    try {
        let saveStatus = await createUser(data);
        if(saveStatus) {
            res.status(200).json({
                message: "added successfully"
            });
        }
    } catch(error) {
        res.status(500).json({
            error: "Unable to create user" + error
        });
    }
});

module.exports = router;