import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import { useRouter } from 'next/router';
import axios from 'axios';

const SelectQuizPage = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [totalQuizzes, setTotalQuizzes] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(3);
    const [fetchedQuizzesCount, setFetchedQuizzesCount] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                const firstQuestion = currentPage * pageSize - pageSize;
                const lastQuestion = currentPage * pageSize;
                const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || {};

                console.log('Total quizzes:', totalQuizzes);
                console.log(Object.keys(storedQuizzes).length);
                console.log(totalQuizzes)
                
                if ( totalQuizzes==0 || Object.keys(storedQuizzes).length!= totalQuizzes) {
                    if (fetchedQuizzesCount === 0) {
                        response = await axios.get(`http://localhost:8080/getQuizzes?page=1&limit=${pageSize * 2}`);
                        setFetchedQuizzesCount(pageSize * 2);
                        const totalResponse = await axios.get(`http://localhost:8080/getQuizzesTotal`);
                        setTotalQuizzes(totalResponse.data.total);
                    } else {
                        const offset = (currentPage - 2) * pageSize;
                        response = await axios.get(`http://localhost:8080/getQuizzes?page=${currentPage}&limit=${pageSize}&offset=${offset}`);
                    }
                    setQuizzes(response.data);
                    // const updatedQuizzes = { ...storedQuizzes, [currentPage]: response.data };
                    // localStorage.setItem('quizzes', JSON.stringify(updatedQuizzes));
                    const updatedQuizzes = { ...storedQuizzes };
                    response.data.forEach(quiz => {
                        if (!updatedQuizzes[quiz._id]) {
                            updatedQuizzes[quiz._id] = quiz;
                        }
                    });
                    localStorage.setItem('quizzes', JSON.stringify(updatedQuizzes));

                    console.log("fetching from server");
                }
                else {
                    // var firstQues = currentPage * pageSize - pageSize;
                    // var lastQues = currentPage * pageSize;
                    // //from storedQuizzes fetch quizzes in that range and setQuizzes
                    const quizzesInRange = Object.values(storedQuizzes).slice(firstQuestion, lastQuestion);
                    setQuizzes(quizzesInRange);
                    console.log("fetching from local");
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [currentPage, pageSize, fetchedQuizzesCount]);

    const handleQuizClick = (quizId) => {
        router.push(`/take-quiz?quizId=${quizId}`);
    };

    const getHighestScore = (quizId) => {
        const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
        const quiz = storedQuizzes[quizId];
        if (quiz) {
            const totalQuestions = quiz.totalQuestions;
            const highestScore = quiz.highestScore || 0;
            return highestScore + " out of " + totalQuestions;
        } else {
            return "0 out of 0";
        }
        console.log(quiz);
    };

    const isQuizTaken = (quiz) => {
        const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || {};
        var flag = true;
            // for (const storedQuiz of storedQuizzes) {
            //     if (storedQuiz.name === quiz.name) {
            //         flag = true;
            //         break;
            //     }
            // }
        if (storedQuizzes[quiz._id].taken == undefined) {
                flag = false;
            }
        return flag;
    };

    return (
        <div>
            <Navbar />
            <h1>Select Quiz</h1>
            <ul>
                {quizzes.slice(0, pageSize).map((quiz, index) => (
                    <li key={index}>
                        <div onClick={() => handleQuizClick(quiz._id)}>
                            {quiz.name}
                        </div>
                        {isQuizTaken(quiz) ? (
                            <div>
                                Highest Score: {getHighestScore(quiz._id)}
                            </div>
                        ) : (
                            <div>
                                Not Taken
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={(currentPage * pageSize) >= totalQuizzes}>Next</button>
            </div>
        </div>
    );
};

export default SelectQuizPage;
