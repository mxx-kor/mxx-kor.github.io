import { IconType } from "@react-icons/all-files";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiGmail } from "@react-icons/all-files/si/SiGmail";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";

const icons = {
  email: SiGmail,
  github: SiGithub,
  linkedin: SiLinkedin,
};

const ContactIcons = ({
  contact,
  ...props
}: React.ComponentProps<IconType> & {
  contact: keyof typeof icons;
}) => {
  const Component = icons[contact] ?? null;
  return <Component {...props} />;
};

export default ContactIcons;
