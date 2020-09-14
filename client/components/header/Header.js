import Head from "next/head";
import Link from "next/link";

export default function Header({ children }) {
  return (
    <div>
      <Head>
        <title>Chingu Quiz App</title>
      </Head>

      <header>
        <h3>Chingu Quiz App</h3>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/quizzes">
            <a>Choose a quiz</a>
          </Link>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
