import Link from "next/link";
import { useRouter } from "next/router";
import { ComponentProps } from "react";

import { cn } from "@/libs/core";

interface NavLink extends ComponentProps<typeof Link> {
  href: string;
  path: string;
}

const NavLink = ({ href, path, className, ...props }: NavLink) => {
  const router = useRouter();
  let pathname = router.pathname || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }
  if (pathname.includes("/archives/")) {
    pathname = "/archives";
  }

  return (
    <Link
      href={href}
      className={cn(
        href === pathname ? "text-primary font-bold" : "text-tertiary",
        "hover:text-secondary",
        className,
      )}
      {...props}
    >
      {path}
    </Link>
  );
};

export default NavLink;
