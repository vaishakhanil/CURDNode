# Full Stack JavaScript & Node - CSD-3103
---
>> Name: Vaishakh Anil Kumar
>> C#: C0877469

### How to run the project:
---
```
npm install
npm run start
```

> Please find the .env file within zip

### File Structure:
---
```
.
├── content
│   ├── addUser.content.js
│   ├── displayUser.content.js
│   ├── index.js
│   └── updateUser.content.js
├── index.js
├── package.json
├── package-lock.json
├── readme.md
├── routes
│   ├── addUser.js
│   ├── index.js
│   └── updateUser.js
├── static
│   └── js
│       └── index.js
├── utils
│   └── db
│       ├── createUser.js
│       ├── db.connection.js
│       ├── deleteUser.js
│       ├── editUser.js
│       ├── getUser.js
│       ├── index.js
│       └── schema
│           └── User.schema.js
└── views
    ├── 404.pug
    ├── addUser.pug
    ├── index.pug
    └── updateUser.pug
```

- Content File: Contains all the static contents displayed on the screen (like title, h1 text, etc)
- Routes: Contains all the routes for the pages and API (example: /add to add user and /update to update user)
- Utils: Contains Database Schema and Helper functions to interface with the database
- Views: Contains Pug Files to render the UI
- Static: Contains the javascript file that runs on client side
- index.js: To Spin up an express server and serve the files