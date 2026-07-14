import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useAppSelector } from "../hooks/hooks";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const leng = useAppSelector((state) => state.lang.esp);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: name, from_email: email, subject, message },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("sent");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-title">
      <h2>{leng ? "Contacto" : "Contact"}</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label htmlFor="name">{leng ? "Nombre" : "Name"}</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="contact-form__field">
          <label htmlFor="subject">{leng ? "Asunto" : "Subject"}</label>
          <input
            id="subject"
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="message">{leng ? "Mensaje" : "Message"}</label>
          <textarea
            id="message"
            rows={6}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="contact-form__btn"
          disabled={status === "sending"}
        >
          {status === "sending"
            ? leng ? "Enviando..." : "Sending..."
            : status === "sent"
            ? leng ? "¡Mensaje enviado!" : "Message sent!"
            : leng ? "Enviar mensaje" : "Send message"}
        </button>

        {status === "error" && (
          <p className="contact-form__error">
            {leng
              ? "Hubo un error al enviar. Intentá de nuevo."
              : "Something went wrong. Please try again."}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
