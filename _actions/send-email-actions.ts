"use server";

import nodemailer from "nodemailer";
import { emailTemplate } from "@/_lib/email-template";
import DOMPurify from "isomorphic-dompurify";

interface EmailTemplateData {
  name: string;
  email: string;
  phone: string;
  department: string;
  message: string;
}

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  replyTo: string;
  html: string;
}

export async function sendEmail(formData: FormData): Promise<void> {
  const honey = formData.get("honey");

  try {
    if (honey === null) {
      const name = DOMPurify.sanitize(formData.get("name")?.toString() || "");
      const email = DOMPurify.sanitize(formData.get("email")?.toString() || "");
      const phone = DOMPurify.sanitize(formData.get("phone")?.toString() || "");
      const department = DOMPurify.sanitize(
        formData.get("department")?.toString() || ""
      );
      const message = DOMPurify.sanitize(
        formData.get("message")?.toString() || ""
      );

      const emailHtmlContent = emailTemplate({
        name,
        email,
        phone,
        department,
        message,
      } as EmailTemplateData);

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST as string,
        port: parseInt(process.env.SMTP_PORT as string, 10),
        secure: false,
        auth: {
          user: process.env.SMTP_USER as string,
          pass: process.env.SMTP_PASS as string,
        },
        requireTLS: true,
      });

      let recipientEmail: string;
      switch (department) {
        case "creative":
          recipientEmail = process.env.SMTP_CREATIVE_EMAIL as string;
          break;
        case "publicRelations":
          recipientEmail = process.env.SMTP_PUBLIC_RELATIONS_EMAIL as string;
          break;
        case "general":
        default:
          recipientEmail = process.env.SMTP_GENERAL_EMAIL as string;
          break;
      }

      const mailOptions: MailOptions = {
        from: process.env.SMTP_USER as string,
        to: recipientEmail,
        subject: `Website form submission - ${
          department === "general"
            ? "LNC General enquiry"
            : department === "creative"
            ? "LNC Creative"
            : "LNC Public Relations"
        }`,
        replyTo: email,
        html: emailHtmlContent,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.error("Invalid form submission due to non-empty honeypot field");
    }
  } catch (error) {
    console.error(error);
  }
}
