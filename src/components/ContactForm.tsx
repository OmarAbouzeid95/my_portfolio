"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from "react-hook-form";
import { Loader2 } from "lucide-react";
import clsx from "clsx";

export interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const requiredField = "This field is required";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactFormProps>();
  const [loading, setLoading] = useState<boolean>(false);
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const onSubmit: SubmitHandler<ContactFormProps> = (data) => {
    console.log("data: ", data);
  };
  return (
    <>
      {!messageSent && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className={clsx("block mb-2")}>
            Name <span className="text-primary">*</span>
          </label>
          <Input
            type="text"
            id="name"
            className={clsx(
              "mb-4 bg-lightDark border-lightDark focus:ring-2 ring-lightWhite focus:border-lightDark",
              errors?.email?.type && "ring-red-500"
            )}
            {...register("name", { required: true })}
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
          <label htmlFor="email" className="font-semibold block mb-2">
            Email <span className="text-primary">*</span>
          </label>
          <Input
            type="email"
            id="email"
            className={clsx("mb-4", errors?.email?.type && "ring-red-500")}
            {...register("email", { required: true })}
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
          <label htmlFor="message" className="font-semibold block mb-2">
            Message <span className="text-primary">*</span>
          </label>
          <Textarea
            className={clsx("mb-4", errors?.email?.type && "ring-red-500")}
            id="message"
            {...register("message", { required: true })}
          />
          {errors?.message?.type === "required" && (
            <p className={clsx("text-red-500 -mt-2 mb-4 text-left text-sm")}>
              {requiredField}
            </p>
          )}
          <Button
            className="flex items-center justify-center bg-primary hover:bg-primaryDark w-full py-2 text-white rounded-md disabled:bg-primaryLight"
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
        <p className={clsx("animate-fade-in")}>
          Thank you for your message, I'll get back to you as soon as possible
        </p>
      )}
    </>
  );
};

export default ContactForm;
