const User = require("./schema/User.schema");

/**
 * Create User - Create user and inserts into the database
 * @param {String} lastName - Last Name 
 * @param {String} firstName - First Name 
 * @param {Date} dob - Date of Birth 
 * @param {String} address1 - Address 1 
 * @param {String} address2 - Address 2 
 * @param {String} city - City
 * @param {String} country - Country
 * @param {Number} phoneNumber - Phone Number
 * @param {String} email - Email Address
 * @param {String} userNotes - User Notes
 * 
 * @returns Success 
 */
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
    try {
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
    } catch (error) {
        throw error
    }
}

module.exports = createUser;