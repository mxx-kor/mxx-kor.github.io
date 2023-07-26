import React, { ReactNode } from "react";
import { useRouter } from "next/router";

const SubLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.back()}>뒤로 가기</button>
      {children}
    </div>
  );
};

export default SubLayout;
