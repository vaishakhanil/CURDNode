const User = require("./schema/User.schema");

const getUsers = async (page = 1, limit = 10) => {
    const skip = (page - 1) * 10;
    const users = await User.find().skip(skip).limit(limit);
    return users;
}

const getUsersCount = async () => {
    const count = await User.countDocuments();
    return count;
}

const findUserByID = async (id) => {
    try {
        const user = await User.findById(id);
        return user
    } catch(error) {
        throw error
    }
}

module.exports = {getUsers, getUsersCount, findUserByID}