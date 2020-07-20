const router = require("express").Router();
const bookController = require('../../controllers/booksController');

router.route("/")
//for getting all books
.get(bookController.findAll)



module.exports = router;