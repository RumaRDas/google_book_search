import axios from 'axios';


export default {
    //get Google Books from search
    getGoogleBooks: function () {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q="+qery)
    },
    // Gets all books
    getBook: function () {
        return axios.get("/api/books");
    },
    //get book function by id
    getBook: function () {
        return axios.get("/api/books" + id);
    },
    //delete books with given Id
    deleteBook: function () {
        return axios.delete("/api/books/" + id);
    },
    //save a book to the database 
    saveBook: function () {
        return axios.post("/api/books/", bookData)
    }

}