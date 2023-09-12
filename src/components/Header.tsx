import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import IconButton from "./IconButton";
import { FiCloudLightning } from "@react-icons/all-files/fi/FiCloudLightning";
import { siteConfig } from "@/config";

const Header = () => {
  return (
    <header className="flex justify-between py-6">
      <Link href="/" className="text-3xl">
        <IconButton>
          <FiCloudLightning />
        </IconButton>
      </Link>
      <ul className="flex gap-4 items-center">
        <li>
          <ThemeSwitch />
        </li>
        {siteConfig.menu.map(({ label, path }) => (
          <li key={label}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
