import { ContactFormProps } from "@/components/ContactForm";

const ContactFormMessage = ({ name, email, message }: ContactFormProps) => {
  return (
    <>
      <h3>You&apos;ve got a new message from omarabouzeid.dev</h3>
      <h4>
        Name: <span style={{ fontWeight: "normal" }}>{name}</span>
      </h4>
      <h4>
        Email: <span style={{ fontWeight: "normal" }}>{email}</span>
      </h4>
      <h4>
        Message: <span style={{ fontWeight: "normal" }}>{message}</span>
      </h4>
    </>
  );
};

export default ContactFormMessage;
