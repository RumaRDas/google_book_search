const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const { db } = require("../../models/book");

// /api/books/author/wagner

router.get("/title/:title", (req, res) =>{
   req.query = { title: req.params.title}
   booksController.findAll(req, res);
})

router.route("/")
    //for getting all books
    .get(booksController.findAll)
    .post(booksController.create)

module.exports = router;