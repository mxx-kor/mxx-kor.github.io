import React, { ReactNode } from "react";
import Link from "next/link";

const SubLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Link href="/">Home</Link>
      {children}
    </div>
  );
};

export default SubLayout;
