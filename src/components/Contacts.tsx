import { siteConfig } from "@/config";
import Link from "next/link";
import ContactIcons from "./ContactIcons";

const Contacts = () => {
  const {
    author: { contacts },
  } = siteConfig;
  return (
    <div className="flex gap-2 text-xl">
      {Object.keys(contacts).map(sns => {
        const assertedSns = sns as keyof typeof contacts;
        let contact = contacts[assertedSns];

        if (sns === "email") contact = `mailto:${contact}`;
        if (sns === "github") contact = `https://github.com/${contact}`;

        return (
          <Link key={sns} href={contact}>
            <ContactIcons contact={assertedSns} />
          </Link>
        );
      })}
    </div>
  );
};

export default Contacts;
