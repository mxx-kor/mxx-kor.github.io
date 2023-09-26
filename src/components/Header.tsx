import ThemeSwitch from "./ThemeSwitch";
import { siteConfig } from "@/config";
import NavLink from "./base/NavLink";

const Header = () => {
  return (
    <header className="flex justify-between py-6">
      <ul className="flex items-center gap-4">
        {siteConfig.menu.map(({ label, path }) => (
          <li className="font-sans font-medium" key={label}>
            <NavLink href={path} path={label} />
          </li>
        ))}
      </ul>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
