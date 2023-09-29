import { fontSans, fontSpoqa } from "@/constants/font";

const Font = () => {
  return (
    <style jsx global>{`
      :root {
        --font-sans: ${fontSans.style.fontFamily};
        --font-spoqa: ${fontSpoqa.style.fontFamily};
      }
    `}</style>
  );
};

export default Font;
