import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import { useRouter } from 'next/router';

const SelectQuizPage = () => {
    const [quizzes, setQuizzes] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
        setQuizzes(storedQuizzes);
    }, []);

    const handleQuizClick = (quizId) => {
        router.push(`/take-quiz?quizId=${quizId}`);
    };

    // const getHighestScore = (quizId) => {
    //     const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    //     return storedQuizzes[quizId].highestScore;
    // };

    const getHighestScore = (quizId) => {
        const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
            const totalQuestions = storedQuizzes[quizId].questions.length;
            const highestScore = storedQuizzes[quizId].highestScore || 0;
            return highestScore + " out of " + totalQuestions;
    };

    const isQuizTaken = (quiz) => {
        return quiz.taken === true;
    };

    return (
        <div>
            <Navbar />
            <h1>Select Quiz</h1>
            <ul>
                {quizzes.map((quiz, index) => (
                    <li key={index}>
                        <div onClick={() => handleQuizClick(index)}>
                            {quiz.name}
                        </div>
                        {isQuizTaken(quiz) ? (
                            <div>
                                Highest Score: {getHighestScore(index)}
                            </div>
                        ) : (
                            <div>
                                Not Taken
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectQuizPage;
