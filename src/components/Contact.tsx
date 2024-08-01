import Section from "./Section";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <Section title="Contact" id="contact">
      <div className="flex flex-col gap-4 md:flex-row">
        <ContactForm />
        <div className="relative flex py-5 items-center md:flex-col">
          <div className="flex-grow border-t border-lightWhite md:border-r"></div>
          <span className="flex-shrink mx-4 text-bold text-sm border-lightWhite md:my-4">
            OR
          </span>
          <div className="flex-grow border-t border-lightWhite md:border-r"></div>
        </div>
        <div>
          <h2 className="font-semibold text-3xl text-center mb-6 md:text-left">
            Shoot me an email
          </h2>
          <Link
            href="mailto:omaradham1995@gmail.com"
            className="flex justify-center items-center gap-2">
            <Mail />
            omaradham1995@gmail.com
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
