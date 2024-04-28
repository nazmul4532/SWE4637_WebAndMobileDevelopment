import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import { useRouter } from 'next/router';
import axios from 'axios';


const SelectQuizPage = () => {
    const [quizzes, setQuizzes] = useState([]);
    const router = useRouter();

    // useEffect(() => {
    //     const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    //     setQuizzes(storedQuizzes);
    // }, []);
    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/getQuizzes');
                console.log(response.data);
                setQuizzes(response.data);
            } catch (error) {
                console.error('Error fetching quizzes:', error);
            }
        };
        fetchQuizzes();
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
                        <div onClick={() => handleQuizClick(quiz._id)}>
                            {quiz.name}
                        </div>
                        {isQuizTaken(quiz) ? (
                            <div>
                                Highest Score: {getHighestScore(index)}
                            </div>
                        ) : (
                            <div>
                                {/* Not Taken */}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectQuizPage;
