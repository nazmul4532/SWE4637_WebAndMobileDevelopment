import React from 'react';
import Link from 'next/link';
import '../styles/styles.css'; 

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Quiz App</h1>
      <Link href="/create-quiz">
        <p>Create Quiz</p>
      </Link>
      <br />
      <Link href="/select-quiz">
        <p>Select Quiz</p>
      </Link>
      <br />
      <Link href="/take-quiz">
        <p>Take Quiz</p>
      </Link>
      <Link href="/">
        <div><p>Welcome to My Quiz App</p></div>
      </Link>
    </div>
  );
};

export default HomePage;
