# Google Books Search

### Overview

This is a React-based Google Books Search app. This app helps user, query and display books based on searches. This app  also use Node, Express and MongoDB so that users can save books to review or purchase later.

## User MongoDB for database 
### books datamodel 
    title: {
        type: String, required: true
    },
    authors: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    image: {
        type: String, required: true
    },
    link: {
        type: String, required: true
    },
    date: {
        type: Date, default: Date.now
    }

## Following Express routes  are use for get post and delet data:
* `/api/books` (get) - Should return all saved books as JSON.

* `/api/books` (post) - Will be used to save a new book to the database.

* `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.

## BackEnd Instalation 

        $ npm install,
        $ npm install express,
        $ npm install gitignore,
        $ npm install mongoose,
        $ npm install dotenv
        $ npm install concurrently

## FrontEnd Instalation 

        $ npx create-react-app
        $ npm install react-router-dom
        $ npm install axios

