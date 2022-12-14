const e = require("express");
const { Lecture, Word, User } = require("../model/model");
const { addWord } = require("./lectureController");

const wordController = {
    addWord: async (req, res) => {
        try {
            const newWord = new Word(req.body);
            const savedWord = await newWord.save();
            res.status(200).json(savedWord);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    addManyWord: async (req, res) => {
        var x = req.body;
        x.forEach(element => {
            {
                addWord(element,res);
            }
        });
    },
    getAllWord: async (req, res) => {
        try {
            const word = await Word.find();
            res.status(200).json(word);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },
    addExample: async (req,res) => {
        try {
            const word = await Word.findById(req.params.id);
            await word.updateOne({$set: {exampleEng: req.body.eng}});
            await word.updateOne({$set: {exampleVie: req.body.vie}});
            res.status(200).json("Added!");
        } catch(error)
        {
            console.log(error);
            res.status(500).json(error);
        }
    },
    getWordByName: async (req, res) => {
        try {
            const word = await Word.findOne({name: req.params.name});
            res.status(200).json(word);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getWordByFName: async (req, res) => {
        try {
            const word = await Word.findOne({fullName: req.params.fname});
            res.status(200).json(word);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    test: (req, res) => {
        res.status(200).json("Routing is fine")
    },
    getWordByID: async (req, res) => {
        try {
            const word = await Word.findById(req.params.id);
            res.status(200).json(word);
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getRandom: async (req, res) => {
        try {
            const words = await Word.aggregate([{$sample: {size: Number(req.params.number)}}]); // You want to get 5 docs
            res.status(200).json(words);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = wordController;