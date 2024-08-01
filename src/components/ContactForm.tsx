"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { nameRegex, emailRegex } from "@/config/forms";
import { sendContactFormMessage } from "@/lib/resend";
import clsx from "clsx";

export interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

type MessageInformation = {
  status: "success" | "failure";
  message: string;
};

const requiredField = "This field is required";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactFormProps>();
  const [loading, setLoading] = useState<boolean>(false);
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [messageInfo, setMessageInfo] = useState<MessageInformation>({
    status: "success",
    message: "",
  });
  const onSubmit: SubmitHandler<ContactFormProps> = async (data) => {
    setLoading(true);
    const { status } = await sendContactFormMessage(data);
    setMessageSent(true);
    if (status === "failure") {
      setMessageInfo({
        status: "failure",
        message:
          "Oops, something went wrong from our side. Please try resending the message using the email option below.",
      });
    } else {
      setMessageInfo({
        status: "success",
        message:
          "Thank you for your message, I'll get back to you as soon as possible.",
      });
    }
    setLoading(false);
  };
  return (
    <div>
      <h2 className="font-semibold text-3xl text-center mb-6 md:text-left">
        Drop me a message
      </h2>
      {!messageSent && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className={clsx("block mb-2 text-sm")}>
            Name <span className="text-primary">*</span>
          </label>
          <Input
            type="text"
            id="name"
            className={clsx("mb-4", errors?.email?.type && "ring-red-500")}
            {...register("name", { required: true, pattern: nameRegex })}
          />
          {errors?.name?.type === "required" && (
            <p className={clsx("text-red-500 -mt-2 mb-4 text-left text-sm")}>
              {requiredField}
            </p>
          )}
          {errors?.name?.type === "pattern" && (
            <p className={clsx("text-red-500 -mt-2 mb-4 text-left text-sm")}>
              Please enter a valid name
            </p>
          )}
          <label htmlFor="email" className="block mb-2 text-sm">
            Email <span className="text-primary">*</span>
          </label>
          <Input
            type="email"
            id="email"
            className={clsx("mb-4", errors?.email?.type && "ring-red-500")}
            {...register("email", { required: true, pattern: emailRegex })}
          />
          {errors?.email?.type === "required" && (
            <p className={clsx("text-red-500 -mt-2 mb-4 text-left text-sm")}>
              {requiredField}
            </p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className={clsx("text-red-500 -mt-2 mb-4 text-left text-sm")}>
              Please enter a valid email
            </p>
          )}
          <label htmlFor="message" className="block mb-2 text-sm">
            Message <span className="text-primary">*</span>
          </label>
          <Textarea
            className={clsx("mb-8", errors?.email?.type && "ring-red-500")}
            id="message"
            {...register("message", { required: true })}
          />
          {errors?.message?.type === "required" && (
            <p className={clsx("text-red-500 -mt-4 mb-4 text-left text-sm")}>
              {requiredField}
            </p>
          )}
          <Button
            className="flex items-center justify-center gap-2 px-4 py-5 w-full border border-white rounded-md hover:border-lightWhite text-white hover:text-lightWhite transition-all duration-700"
            disabled={loading}>
            {loading ? (
              <Loader2 className="animate-spin infinite" />
            ) : (
              "Send message"
            )}
          </Button>
        </form>
      )}
      {messageSent && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}>
          {messageInfo.message}
        </motion.p>
      )}
    </div>
  );
};

export default ContactForm;
