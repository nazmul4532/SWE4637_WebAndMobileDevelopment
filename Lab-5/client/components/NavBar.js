import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/create-quiz">Make Quiz</Link>
        </li>
        <li>
          <Link href="/select-quiz">Select Quiz</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
