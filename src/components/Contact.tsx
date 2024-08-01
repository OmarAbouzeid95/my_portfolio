import Section from "./Section";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
            target="_blank"
            className="flex justify-center items-center gap-2 mb-10">
            {/* <FontAwesomeIcon icon={faEnvelope} size="1x" className="w-5" /> */}
            <Mail />
            omaradham1995@gmail.com
          </Link>
          <h2 className="font-semibold text-3xl text-center mb-6 md:text-left">
            My online presence
          </h2>
          <div className="flex justify-center items-start gap-10 md:justify-start md:gap-6 md:ml-1 lg:ml-4">
            <Link
              href="https://github.com/omarabouzeid95"
              target="_blank"
              className="flex justify-center items-center gap-2 mb-4">
              <FontAwesomeIcon icon={faGithub} className="w-6" />
              {/* github.com/omarabouzeid95 */}
            </Link>
            <Link
              href="https://linkedin.com/in/omarabouzeidali"
              target="_blank"
              className="flex justify-center items-center gap-2 mb-2">
              <FontAwesomeIcon icon={faLinkedin} className="w-6" />
              {/* linkedin.com/in/omarabouzeidali */}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
