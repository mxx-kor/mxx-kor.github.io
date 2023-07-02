import Link from "next/link";

const Header = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/blog">블로그</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
    </ul>
  );
};

export default Header;
