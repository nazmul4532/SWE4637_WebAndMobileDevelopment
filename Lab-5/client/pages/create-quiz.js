import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import axios from 'axios';

const CreateQuizPage = () => {
    const [quizData, setQuizData] = useState({
        name: '',
        questions: [{ prompt: '', options: ['', ''], correctAnswer: '' }]
    });

    useEffect(() => {

    }, []);

    const handleInputChange = (index, key, value) => {
        setQuizData(prevState => {
            if (key === 'name') {
                return { ...prevState, name: value };
            } else {
                const updatedQuestions = [...prevState.questions];
                updatedQuestions[index][key] = value;
                return { ...prevState, questions: updatedQuestions };
            }
        });
    };

    const handleOptionChange = (questionIndex, optionIndex, value) => {
        setQuizData(prevState => {
            const updatedQuestions = [...prevState.questions];
            updatedQuestions[questionIndex].options[optionIndex] = value;
            return { ...prevState, questions: updatedQuestions };
        });
    };

    const handleAddQuestion = () => {
        setQuizData(prevState => {
            const updatedQuestions = [...prevState.questions, { prompt: '', options: ['', ''], correctAnswer: '' }];
            return { ...prevState, questions: updatedQuestions };
        });
    };


    const handleAddOption = (questionIndex) => {
        setQuizData(prevState => {
            const updatedQuestions = [...prevState.questions];
            updatedQuestions[questionIndex].options.push('');
            return { ...prevState, questions: updatedQuestions };
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     try {
    //         const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    //         const newQuizData = { ...quizData };
    //         if (storedQuizzes.length === 0) {
    //             localStorage.setItem('quizzes', JSON.stringify([newQuizData]));
    //         } else {
    //             localStorage.setItem('quizzes', JSON.stringify([...storedQuizzes, newQuizData]));
    //         }
    //         setQuizData({ name: '', questions: [{ prompt: '', options: ['', ''], correctAnswer: '' }] });
    //         console.log('Quiz submitted successfully');
    //     } catch (error) {
    //         console.error('Error submitting quiz:', error);
    //     }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(quizData)
            const response = await axios.post('http://localhost:8080/create-quiz', quizData);
            console.log('Quiz created successfully:', response.data);
            setQuizData({ name: '', questions: [{ prompt: '', options: ['', ''], correctAnswer: '' }] });
        } catch (error) {
          console.error('Error creating quiz:', error);
        }
      };
    return (
        <div>
            <Navbar />
            <h1>Create Quiz</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Quiz Name:
                    <input
                        type="text"
                        value={quizData.name}
                        onChange={(e) => handleInputChange(null, 'name', e.target.value)}
                    />
                </label>
                <br />
                {quizData.questions.map((question, questionIndex) => (
                    <div key={questionIndex}>
                        <label>
                            Question Prompt:
                            <input
                                type="text"
                                value={question.prompt}
                                onChange={(e) => handleInputChange(questionIndex, 'prompt', e.target.value)}
                            />
                        </label>
                        <br />
                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <label>
                                    Option {optionIndex + 1}:
                                    <input
                                        type="text"
                                        value={option}
                                        onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                                    />
                                </label>
                            </div>
                        ))}
                        <button type="button" onClick={() => handleAddOption(questionIndex)}>
                            Add Option
                        </button>
                        <br />
                        <label>
                            Correct Answer:
                            <select
                                value={question.correctAnswer}
                                onChange={(e) => handleInputChange(questionIndex, 'correctAnswer', e.target.value)}
                            >
                                {question.options.map((option, optionIndex) => (
                                    <option key={optionIndex} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <br />
                    </div>
                ))}
                <button type="button" onClick={handleAddQuestion}>
                    Add Question
                </button>
                <button type="submit">Submit Quiz</button>
            </form>
        </div>
    );
};

export default CreateQuizPage;
