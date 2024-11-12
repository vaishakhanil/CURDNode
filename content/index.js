// CONTENTS FOR THE 3 PAGES
const addUserPageContent = require('./addUser.content');
const displayUserPageContent = require('./displayUser.content');
const updateUserPageContent = require('./updateUser.content');

const Navigation = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Add User",
        url: "/add"
    }
]

const notFoundContent = {
    title: "404 | Page Not Found",
    message: "404 | Page not found."
}

const formFields = [
    {
        type: "text",
        name: "lastName",
        content: "Last Name",
        required: true
    },
    {
        type: "text",
        name: "firstName",
        content: "First Name",
        required: true
    },
    {
        type: "date",
        name: "dob",
        content: "Date of Birth",
        required: true
    },
    {
        type: "text",
        name: "address1",
        content: "Address 1",
        required: true
    },
    {
        type: "text",
        name: "address2",
        content: "Address 2",
        required: true
    },
    {
        type: "text",
        name: "city",
        content: "City",
        required: true
    },
    {
        type: "text",
        name: "postalCode",
        content: "Postal Code",
        required: true
    },
    {
        type: "text",
        name: "country",
        content: "Country",
        required: true
    },
    {
        type: "number",
        name: "phoneNumber",
        content: "Phone Number",
        required: true
    },
    {
        type: "email",
        name: "email",
        content: "Email ID",
        required: true
    },
    {
        type: "text",
        name: "userNotes",
        content: "Notes",
        required: true
    },
]

const pages = [notFoundContent, addUserPageContent, displayUserPageContent, updateUserPageContent]

pages.forEach(items => {
    items.navigation = Navigation;
    items.formFields = formFields;
})

module.exports = {
    notFoundContent,
    addUserPageContent,
    displayUserPageContent,
    updateUserPageContent
}