"use server";
import { Resend } from "resend";
import { ContactFormProps } from "@/components/ContactForm";
import ContactFormMessage from "@/components/ContactFormMessage";

const resend = new Resend(process.env.RESEND_KEY);

export const sendContactFormMessage = async ({
  name,
  email,
  message,
}: ContactFormProps) => {
  try {
    const { error } = await resend.emails.send({
      from: "omarabouzeid.dev <onboarding@resend.dev>",
      to: ["omaradham1995@gmail.com"],
      subject: "Message from portfolio contact form",
      react: ContactFormMessage({ name, email, message }),
    });

    if (error) {
      throw Error(JSON.stringify(error));
    }
    return { status: "success" };
  } catch (error) {
    console.error(
      `Error sending contact form message from: ${name}, email: ${email}, message: ${message}, error: ${error}`
    );
    return { status: "failure" };
  }
};
