import IconText from "@/components/base/IconText";
import LinkText from "@/components/base/LinkText";
import PlainText from "@/components/base/PlainText";
import Title from "@/components/base/Title";
import { RiMoreFill } from "@react-icons/all-files/ri/RiMoreFill";

const Home = () => {
  return (
    <>
      <section>
        <Title className="mt-6">👋 안녕하세요, 개발자 김민재입니다.</Title>
        <PlainText className="text-secondary">
          개발 과정에 마주하는 다양한 문제를 해결하는 것을 좋아합니다.
        </PlainText>
        <PlainText>
          경험과 변화을 공유하며 성장하는 것에 가치를 두고 있습니다.
        </PlainText>
        <LinkText href="/about" className="text-sm">
          <IconText
            Icon={RiMoreFill}
            iconsize={24}
            text="More about me"
            className="text-md gap-1"
          />
        </LinkText>
      </section>
    </>
  );
};

export default Home;
