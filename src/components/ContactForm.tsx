import { ChangeEvent, FC, FormEvent, useState } from "react";
import { cn } from "../utils/helpers";
import { useAlert } from "../utils/hooks";
import { EMAIL, EMAILJS, FIRST_NAME } from "../utils/constants";
import { Alert, AlertType } from "./Alert";
import FormFieldInput from "./FormFieldInput";
import FormFieldTextarea from "./FormFieldTextarea";
import { sendEmail } from "../services";

type Props = {
  className?: string;
};

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

const ContactForm: FC<Props> = ({ className }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

  const { showAlert, alertType, alertMessage, showAlertMessage } = useAlert();

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevData) => ({ ...prevData, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await sendEmail(EMAILJS.serviceId, EMAILJS.templateId, {
        from_name: formData.name,
        to_name: FIRST_NAME,
        from_email: formData.email,
        to_email: EMAIL,
        message: formData.message,
      });

      setFormData({ name: "", email: "", message: "" });
      showAlertMessage(AlertType.Success, "You message has been sent");
    } catch (error) {
      console.log(error);
      showAlertMessage(AlertType.Danger, "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn(
        className,
        "mx-auto flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-primary p-5",
      )}
    >
      {showAlert && (
        <Alert
          type={alertType}
          text={alertMessage}
        />
      )}
      <div className="mb-10 flex w-full flex-col items-start gap-5">
        <h2 className="heading-2">Let's Talk</h2>
        <p className="font-normal text-neutral-400">
          Whether you're loking to build a new website, improve your existing platform, or bring a
          unique project to life, I'm here to help
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full"
      >
        <FormFieldInput
          type="text"
          id="name"
          name="name"
          className="mb-5"
          placeholder="John Doe"
          required
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          label="Full Name"
        />
        <FormFieldInput
          type="email"
          id="email"
          name="email"
          className="mb-5"
          placeholder="JohnDoe@email.com"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          label="Email"
        />
        <FormFieldTextarea
          id="message"
          name="message"
          rows={4}
          className="mb-5"
          placeholder="Share your thoughts..."
          required
          autoComplete="message"
          value={formData.message}
          onChange={handleChange}
          label="Message"
        />
        <button
          type="submit"
          className="hover-lift bg-gradient-lavender-to-royal w-full cursor-pointer rounded-md px-1 py-3 text-center text-lg"
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
