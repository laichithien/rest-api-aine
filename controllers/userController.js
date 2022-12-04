const { Lecture, Word, User } = require("../model/model");
const userController = {
    addUser: async (req, res) => {
        try {
            const newUser = new User(req.body);
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllUser: async (req, res) => {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    changeInfo: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            await user.updateOne({$set: {nickName: req.body.nickName}});
            await user.updateOne({$set: {birthday: req.body.birthday}});
            res.status(200).json("Added");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    addLecture: async (req, res) => {
        try {
            const user = await User.find({nickName: req.params.nickName});
            const lecture = await Lecture.find({orNum: req.body.orNum});
            await user.updateOne({$addToSet: {doneLecture: lecture._id}});
            res.status(200).json("Added");
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await User.find({nickName: req.params.nickName});
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = userController;