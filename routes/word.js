const wordController = require("../controllers/wordController");

const router = require("express").Router();

// Add word
router.post("/", wordController.addWord);

// Get all word
router.get("/", wordController.getAllWord);

// add example to a word
router.put("/add/example/id/:id",wordController.addExample);
module.exports = router;