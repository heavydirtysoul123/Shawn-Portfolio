import "./pages.css";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import heroBg from '../assets/bg.png'; // Make sure this path is correct

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    const year = new Date().getFullYear();
    const time = new Date().toLocaleTimeString();

    data.year = year;
    data.time = time;

    emailjs.send('service_fgy7usj', 'template_c0pkuu5', data, 'fYxoj_u1qrjQrYlT3')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus("Message sent! I'll get back to you soon.");
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
      }}
    >
      <div
        className="contact-card"
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(12px)",
          borderRadius: "16px",
          padding: "2rem",
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1 className="page-title" style={{ textAlign: "center" }}>Contact Me</h1>
        <p className="page-text" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          I'd love to hear from you! Please fill out the form below.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="name" name="name" required />
            <label htmlFor="name">Your Name or Company Name</label>
          </div>

          <div className="form-group">
            <input type="email" id="email" name="email" required />
            <label htmlFor="email">Your Email</label>
          </div>

          <div className="form-group">
            <textarea id="message" name="message" rows="5" required></textarea>
            <label htmlFor="message">Your Message</label>
          </div>

          <div className="form-group">
            <input type="text" id="year" name="year" value={new Date().getFullYear()} readOnly hidden />
            <input type="text" id="time" name="time" value={new Date().toLocaleTimeString()} readOnly hidden />
            </div>

          <button type="submit" className="button">Send Message</button>

          {status && <p className="status-text" style={{ marginTop: "1rem", textAlign: "center" }}>{status}</p>}
        </form>
      </div>
    </div>
  );
}
