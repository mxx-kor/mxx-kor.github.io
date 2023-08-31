import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="flex justify-between py-6">
      <Link href="/" className="text-3xl">
        Minjae.log
      </Link>
      <ul className="flex gap-4">
        <ThemeSwitch />
        <li>
          <Link href="/blog">블로그</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
