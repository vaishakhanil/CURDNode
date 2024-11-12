const express = require('express');
const router = new express.Router();
const { updateUserPageContent } = require('../content');
const {findUserByID, editUser, deleteUser} = require('../utils/db');

router.get('/update', async (req, res) => {
    try {
        const id = req.query.id;
        const user = await findUserByID(id);
        if(!user) {
            throw "Error: No User Found"
        }
        // console.log(user);
        updateUserPageContent.id = id;
        updateUserPageContent.user = user;
        res.render('updateUser', updateUserPageContent);
    } catch (error) {
        res.redirect('/404')
    }
});

router.post('/update', async (req, res) => {
    try {
        const id = req.query.id;
        const data = req.body;
        console.log(data, id);
        const updateStatus = await editUser(id, data);
        res.redirect('/')
    } catch (error) {
        res.redirect('/404')
    }
});

router.delete('/delete', async (req,res) => {
    try {
        const id = req.query.id;
        const deleteStatus = await deleteUser(id);
        res.status(200).send({msg: deleteStatus});
    } catch( error) {
        res.redirect('/404')
    }
})

module.exports = router;