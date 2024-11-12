const {closeDatabase, connectDB} = require('./db.connection');
const createUser = require('./createUser');
const {getUsers, getUsersCount, findUserByID} = require('./getUser');
const editUser = require('./editUser');
const deleteUser = require('./deleteUser');

module.exports = {
    connectDB,
    closeDatabase,
    createUser,
    getUsers,
    getUsersCount,
    findUserByID,
    editUser,
    deleteUser
}