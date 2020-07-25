import axios from 'axios';


export default {
    //get Google Books from search
    getGoogleBooks: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    // Gets all books
    getAllBook: function () {
        return axios.get(`/api/books/`);
    },
    //get book function by id
    getBook: function (id) {
        return axios.get(`/api/books/${id}`);
    },
    //delete books with given Id
    deleteBook: function (id) {
        return axios.delete(`/api/books/${id}`);
    },
    //save a book to the database 
    saveBook: function (data) {
        return axios.post(`/api/books/`,data);
    }

}