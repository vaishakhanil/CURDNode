const User = require("./schema/User.schema");

/**
 * Get User is to retrive all the users from the database and display in paginated format
 * @param {Number} page - The Current/active Page 
 * @param {Number} limit - The Number of results in a single page 
 * @returns an array of Users
 */
const getUsers = async (page = 1, limit = 10) => {
    // used for skipping the number of documents based on page number
    const skip = (page - 1) * limit;
    // Using Skip and Limit to paginate
    const users = await User.find().skip(skip).limit(limit);
    return users;
}

// Getting the total number of documents in the database
const getUsersCount = async () => {
    const count = await User.countDocuments();
    return count;
}

/**
 * Finding user by id from the database
 * @param {String} id 
 * @returns the object of the user or throws an error
 */
const findUserByID = async (id) => {
    try {
        const user = await User.findById(id);
        return user
    } catch(error) {
        throw error
    }
}

module.exports = {getUsers, getUsersCount, findUserByID}