const User = require("./schema/User.schema");

const editUser = async (id, content) => {
    try {
        let editStatus = await User.findByIdAndUpdate(id, content);
        return editStatus
    } catch(error) {
        return error;
    }
}


module.exports = editUser;