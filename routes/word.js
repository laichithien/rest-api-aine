const wordController = require("../controllers/wordController");

const router = require("express").Router();

// Add word
router.post("/", wordController.addWord);

// Get all word
router.get("/", wordController.getAllWord);

// add example to a word
router.put("/add/example/id/:id",wordController.addExample);

// Get word by name
router.get("/name/:name", wordController.getWordByName);

// Get word by fullname
router.get("/fname/:fname", wordController.getWordByFName);

// Get word by id
router.get("/id/:id", wordController.getWordByID);

// Testing 
router.get("/test", wordController.test);

// Get random 
router.get("/random/:number", wordController.getRandom);
module.exports = router;