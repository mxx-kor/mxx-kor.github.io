import { RiArrowGoBackFill } from "@react-icons/all-files/ri/RiArrowGoBackFill";
import { m } from "framer-motion";
import Link from "next/link";

import Divider from "@/components/base/Divider";
import IconButton from "@/components/base/IconButton";
import IconText from "@/components/base/IconText";
import PlainText from "@/components/base/PlainText";
import SubTitle from "@/components/base/SubTitle";
import { fadeIn, fadeInUp } from "@/libs/animations";

const Custom404 = () => {
  return (
    <m.main initial="initial" animate="animate" className="py-36 text-center">
      <m.div variants={fadeInUp} className="mx-auto mb-6 w-48">
        <SubTitle className="text-8xl tracking-wider">404</SubTitle>
        <Divider />
      </m.div>
      <m.div variants={fadeIn}>
        <PlainText className="text-lg">
          해당 페이지를 찾을 수 없습니다.
        </PlainText>
        <Link href="/" className="mx-auto inline-block">
          <IconButton className="w-44 ring-1 ring-inset ring-gray-500/40">
            <IconText
              Icon={RiArrowGoBackFill}
              iconsize={16}
              text="메인으로 돌아가기"
              className="text-md gap-2"
            />
          </IconButton>
        </Link>
      </m.div>
    </m.main>
  );
};

export default Custom404;
