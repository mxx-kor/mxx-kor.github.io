import { siteConfig } from "@/config";

import ContactIcons from "./ContactIcons";

const Contacts = () => {
  const {
    author: { contacts },
  } = siteConfig;
  return (
    <div className="mx-auto mb-2 flex gap-2 text-xl sm:mx-0">
      {Object.keys(contacts).map(sns => {
        const assertedSns = sns as keyof typeof contacts;
        let contact = contacts[assertedSns];

        if (sns === "email") contact = `mailto:${contact}`;
        if (sns === "github") contact = `https://github.com/${contact}`;

        return (
          <a
            target="_blank"
            key={sns}
            href={contact}
            rel="noreferrer"
            aria-label={`check author's ${sns}`}
            className="text-tertiary hover:text-primary"
          >
            <ContactIcons contact={assertedSns} />
          </a>
        );
      })}
    </div>
  );
};

export default Contacts;
