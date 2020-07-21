const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const { db } = require("../../models/book");

// /api/books/author/wagner
router.get("/title/:title", (req, res) =>{
   req.query = { title: req.params.title}
   booksController.findAll(req, res);
})

// Matches with "/api/books"
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create)
    
// Matches with "/api/books/:id"
.route("/:id")
.get(booksController.findById)
module.exports = router;