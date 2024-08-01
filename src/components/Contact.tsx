import Section from "./Section";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Section title="Contact me" id="contact_me">
      <div className="flex flex-col items-center gap-4">
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
