const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
    orNum: {
        type: Number,
        require: true,
        unique: true
    },
    contents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Word"
    }]
})

const englishWordSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    mean: {
        type: String,
        unique: false,
    },
    exampleEng:
    {
        type: String,
        unique: false,
    },
    exampleVie:
    {
        type: String,
        unique: false,
    },
    imgID:
    {
        type:String,
        unique: true,
    }
});

const userSchema = new mongoose.Schema({
    nickName:
    {
        type: String,
        require: true,
        unique: false,
    },
    email:
    {
        type: String,
        require: true,
        unique: true,
    },
    password:
    {
        type: String,
        require: true,
        unique: false,
    },
    birthday:
    {
        type: String,
        requie: false,
        unique: false,
    },
    doneLecture: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lecture"
    }]
});

let Lecture = mongoose.model("Lecture", lectureSchema);
let Word = mongoose.model("Word", englishWordSchema);
let User = mongoose.model("User", userSchema);

module.exports = { Lecture, Word, User };