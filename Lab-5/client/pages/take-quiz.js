import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/NavBar';
import axios from 'axios';


const TakeQuizPage = () => {
    const [quiz, setQuiz] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [unansweredQuestions, setUnansweredQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionTimers, setQuestionTimers] = useState([]);
    const [totalTimeSpent, setTotalTimeSpent] = useState(0); 
    const [timer, setTimer] = useState(null); 
    const router = useRouter();
    const { quizId } = router.query;

    // useEffect(() => {
    //     const fetchQuiz = async () => {
    //         try {
    //             const storedQuizzes = localStorage.getItem('quizzes');
    //             if (storedQuizzes) {
    //                 const quizzes = JSON.parse(storedQuizzes);
    //                 const selectedQuiz = quizzes[quizId];
    //                 if (selectedQuiz) {
    //                     setQuiz(selectedQuiz);
    //                     setAnswers(new Array(selectedQuiz.questions.length).fill(''));
    //                     setUnansweredQuestions(selectedQuiz.questions.map((_, index) => index));
    //                     const timers = selectedQuiz.questions.map((_, index) => 30);
    //                     setQuestionTimers(timers);
    //                 }
    //             }
    //         } catch (error) {
    //             console.error('Error fetching quiz:', error);
    //         }
    //     };

    //     if (quizId !== undefined) {
    //         fetchQuiz();
    //     }
    // }, [quizId]);
    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/getQuiz/${quizId}`);
                setQuiz(response.data);
                setAnswers(new Array(response.data.questions.length).fill(''));
                setUnansweredQuestions(response.data.questions.map((_, index) => index));
                const timers = response.data.questions.map((_, index) => 30);
                setQuestionTimers(timers);
            } catch (error) {
                console.error('Error fetching quiz:', error);
            }
        };
    
        if (quizId) {
            fetchQuiz();
        }
    }, [quizId]);

    useEffect(() => {
        if (!submitted) {
            setTimer(setInterval(() => {
                setTotalTimeSpent(prevTime => prevTime + 1);
            }, 1000));
        } else {
            clearInterval(timer);
        }
        
        return () => clearInterval(timer); 
    }, [submitted]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const updatedTimers = questionTimers.map((time, index) => {
                if (index === currentQuestionIndex && time > 0) {
                    return time - 1;
                }
                return time;
            });
            setQuestionTimers(updatedTimers);
        }, 1000);

        return () => clearTimeout(timer);
    }, [questionTimers, currentQuestionIndex]);

    const handleOptionChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
        setUnansweredQuestions(prevState => prevState.filter(item => item !== index));
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prevIndex => prevIndex - 1);
        }
    };
    
    const handleForward = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
            const newQuizData = { ...quiz };
            
            const currentScore = answers.reduce((acc, answer, index) => {
                if (quiz.questions[index].correctAnswer === answer) {
                    return acc + 1;
                }
                return acc;
            }, 0);
            
            if (!newQuizData.highestScore || currentScore > newQuizData.highestScore) {
                newQuizData.highestScore = currentScore;
            }
            newQuizData.taken = true;
    
            if (storedQuizzes.length === 0) {
                localStorage.setItem('quizzes', JSON.stringify([newQuizData]));
            } else {
                const updatedQuizzes = storedQuizzes.map(q => q.name === newQuizData.name ? newQuizData : q);
                localStorage.setItem('quizzes', JSON.stringify(updatedQuizzes));
            }
            
            setSubmitted(true);
            setQuestionTimers(questionTimers.map(() => 0));
            clearInterval(timer); 
            console.log('Quiz submitted successfully');
        } catch (error) {
            console.error('Error submitting quiz:', error);
        }
    };
    
    

    const score = answers.reduce((acc, answer, index) => {
        if (quiz.questions[index].correctAnswer === answer) {
            return acc + 1;
        }
        return acc;
    }, 0);

    const handleRetakeQuiz = () => {
        setAnswers(new Array(quiz.questions.length).fill(''));
        setSubmitted(false);
        setUnansweredQuestions([...Array(quiz.questions.length).keys()]);
        setCurrentQuestionIndex(0);
        const timers = quiz.questions.map((_, index) => 30);
        setQuestionTimers(timers);
        setTotalTimeSpent(0);
    };

    const handleGoToSelectQuiz = () => {
        router.push('/select-quiz');
    };

    const ReviewSection = () => {
        return (
            <div>
                <h3>Review:</h3>
                <ul>
                    {quiz.questions.map((question, index) => (
                        <li key={index}>
                            Question {index + 1}: {answers[index] === quiz.questions[index].correctAnswer ? 'Correct' : 'Incorrect'}
                            {answers[index] !== quiz.questions[index].correctAnswer && (
                                <span> - Correct Answer: {quiz.questions[index].correctAnswer}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div>
            <Navbar />
            {quiz ? (
                <div>
                    <h1>Take Quiz: {quiz.name}</h1>
                    <p>Progress: {currentQuestionIndex + 1}/{quiz.questions.length}</p>
                    <ul>
                        {quiz.questions.map((question, index) => (
                            <li key={index} style={{ display: index === currentQuestionIndex ? 'block' : 'none' }}>
                                <h3>{question.prompt}</h3>
                                <p>Time Remaining: {questionTimers[index]} seconds</p>
                                <ol type="a">
                                    {question.options.map((option, optionIndex) => (
                                        <li key={optionIndex}>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value={option}
                                                    checked={answers[index] === option}
                                                    onChange={() => handleOptionChange(index, option)}
                                                    disabled={submitted || questionTimers[index] === 0}
                                                />
                                                {option}
                                            </label>
                                        </li>
                                    ))}
                                </ol>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button onClick={handleBack} disabled={currentQuestionIndex === 0}>Back</button>
                        <button onClick={handleForward} disabled={currentQuestionIndex === quiz.questions.length - 1}>Forward</button>
                    </div>
                    {submitted ? (
                        <div>
                            <h2>Score: {score}/{quiz.questions.length}</h2>
                            <p>Total Time Spent: {totalTimeSpent} seconds</p> 
                            {unansweredQuestions.length > 0 && (
                                <div>
                                    <h3>Unanswered Questions:</h3>
                                    <ul>
                                        {unansweredQuestions.map((index) => (
                                            <li key={index}>Question {index + 1}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <ReviewSection />
                            <button onClick={handleRetakeQuiz}>Retake Quiz</button>
                            <button onClick={handleGoToSelectQuiz}>Go to Select Quiz</button>
                        </div>
                    ) : (
                        <button onClick={handleSubmit}>Submit Answers</button>
                    )}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default TakeQuizPage;
