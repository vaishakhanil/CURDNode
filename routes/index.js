const express = require('express');
const router = new express.Router();
const addUser = require('./addUser');
const updateUser = require('./updateUser');

const { displayUserPageContent } = require('../content');

const {getUsers, getUsersCount} = require('../utils/db');

router.use(addUser);
router.use(updateUser);

router.get('/', async (req,res) => {
    let {page, limit} = req.query
    page = page || 1;
    limit = limit || 10;

    let users = await getUsers(page, limit);
    let count = await getUsersCount();
    displayUserPageContent.pages = Math.ceil(count / 10);
    displayUserPageContent.current = page

    displayUserPageContent.users = users;
    res.render('index', displayUserPageContent);
});

module.exports = router;