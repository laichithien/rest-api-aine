const { Eng } = require("../model/model");
const { Lecture, Word, User } = require("../model/model");

const lectureController = {
    addLecture: async (req, res) => {
        try {
            const newLecture = new Lecture(req.body);
            const savedTopic = await newLecture.save();
            res.status(200).json(savedTopic);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllLecture: async (req, res) => {
        try {
            const lecture = await Lecture.find().populate("contents");
            res.status(200).json(lecture);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteLecture: async (req, res) => {
        try {
            const lecture = await Lecture.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    addWord: async (req, res) => {
        try {
            const lecture = await Lecture.findById(req.params.id);
            const word = await Word.findOne({name: req.body.name});
            await lecture.updateOne({$addToSet: {contents: word._id}});
            res.status(200).json("Added");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getLectureByNum: async (req, res) => {
        try {
            const lecture = await Lecture.findOne({orNum: req.params.num}).populate('contents');
            res.status(200).json(lecture);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = lectureController;