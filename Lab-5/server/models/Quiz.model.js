const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    prompt: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
    },
    correctAnswer: {
        type: String,
        required: true,
    }
});

const QuizSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    questions: [QuestionSchema]
});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;
