import Image from "next/image";

const about = () => {
  return (
    <>
      <div>about 페이지입니다.</div>
      <Image
        src="/images/profile.png"
        width={144}
        height={144}
        alt="Profile Photo"
      />
    </>
  );
};

export default about;
