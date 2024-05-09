const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');


router.get('/', (req, res) => {
    res.json({ message: "Hello World" });
});

router.post('/create-quiz', quizController.createQuiz);
router.get('/getQuiz/:quizId', quizController.getQuiz);
router.get('/getQuizzes', quizController.getQuizzes);
router.get('/getQuizzesTotal', quizController.getQuizzesTotal);


module.exports = router;
