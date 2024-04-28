const Quiz = require('../models/Quiz.model');

const quizController = {
    createQuiz: async (req, res) => {
        try {
            const { name, questions } = req.body;
            const newQuiz = new Quiz({ name, questions });
            await newQuiz.save();
            res.status(201).json({ message: 'Quiz created successfully', quiz: newQuiz });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getQuiz: async (req, res) => {
        try {
            const quizId = req.params.quizId;
            const quiz = await Quiz.findById(quizId);
            if (!quiz) {
                return res.status(404).json({ error: 'Quiz not found' });
            }
            res.json(quiz);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getQuizzes: async (req, res) => {
        try {
            const quizzes = await Quiz.find({}, '_id name attemped highestScore');
            res.json(quizzes);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

module.exports = quizController;
