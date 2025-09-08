import emailjs from "@emailjs/browser";
import { EMAILJS } from "../utils/constants";

export const sendEmail = async (
  serviceId: string,
  templateId: string,
  templateParams?: Record<string, unknown>,
) => {
  return await emailjs.send(serviceId, templateId, templateParams, EMAILJS.publicKey);
};
