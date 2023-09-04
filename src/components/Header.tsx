import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import IconButton from "./IconButton";
import { FiCloudLightning } from "@react-icons/all-files/fi/FiCloudLightning";

const Header = () => {
  return (
    <header className="flex justify-between py-6">
      <Link href="/" className="text-3xl">
        <IconButton>
          <FiCloudLightning />
        </IconButton>
      </Link>
      <ul className="flex gap-4 items-center">
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
