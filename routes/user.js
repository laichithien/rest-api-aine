const userController = require("../controllers/userController");

const router = require("express").Router();
// Add user
router.post("/", userController.addUser);

// Get all users
router.get("/", userController.getAllUser);

// Delete user by ID 
router.delete("/id/:id", userController.deleteUser);

// ADD WORD
router.put("/id/:id", userController.changeInfo);



module.exports = router;