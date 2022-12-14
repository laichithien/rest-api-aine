const lectureController = require("../controllers/lectureController");

const router = require("express").Router();

// Add lecture
router.post("/", lectureController.addLecture);

// Get all lectures
router.get("/", lectureController.getAllLecture);

// Get lecture by orNum
router.get("/num/:num", lectureController.getLectureByNum);

// Delete lecture by ID 
router.delete("/id/:id", lectureController.deleteLecture);

// ADD WORD
router.put("/id/:id", lectureController.addWord);

module.exports = router;