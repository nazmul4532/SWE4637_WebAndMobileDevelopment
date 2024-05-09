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

    getQuizzesTotal: async (req, res) => {
        try {
            const totalQuizzes = await Quiz.countDocuments();
            res.json({ total: totalQuizzes });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getQuizzes: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            let limit = parseInt(req.query.limit) || 3;
    
            if (page === 1) {
                limit = 6;
            } else if (page > 1) {
                limit = 3; 
            }
    
            const offset = (page - 1) * limit;
    
            const quizzes = await Quiz.find({}, '_id name attemped highestScore')
                                       .skip(offset)
                                       .limit(limit);
    
            res.json(quizzes);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    
};

module.exports = quizController;
