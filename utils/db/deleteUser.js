const User = require("./schema/User.schema");

const deleteUser = async (id) => {
    try {
        const deleteStatus = await User.findByIdAndDelete(id);
        return deleteStatus;
    } catch (error) { 
        return error;
    }
}

module.exports = deleteUser;