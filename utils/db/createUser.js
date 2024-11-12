const User = require("./schema/User.schema");

const createUser = async (
    {lastName,
    firstName,
    dob,
    address1,
    address2,
    city,
    postalCode,
    country,
    phoneNumber,
    email,
    userNotes}
) => {
    const user = User({
        lastName,
        firstName,
        dob,
        address1,
        address2,
        city,
        postalCode,
        country,
        phoneNumber,
        email,
        userNotes 
    });

    return await user.save();
}

module.exports = createUser;