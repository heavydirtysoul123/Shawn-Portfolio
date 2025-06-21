import "./pages.css";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Simulate sending
    setTimeout(() => {
      setStatus("Message sent! I'll get back to you soon.");
    }, 1500);
  };

  return (
    <div className="page-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <div className="contact-card">
        <h1 className="page-title" style={{ textAlign: "center" }}>Contact Me</h1>
        <p className="page-text" style={{ textAlign: "center" }}>I'd love to hear from you! Please fill out the form below.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="name" name="name" required />
            <label htmlFor="name">Your Name</label>
          </div>

          <div className="form-group">
            <input type="email" id="email" name="email" required />
            <label htmlFor="email">Your Email</label>
          </div>

          <div className="form-group">
            <textarea id="message" name="message" rows="5" required></textarea>
            <label htmlFor="message">Your Message</label>
          </div>

          <button type="submit" className="button">Send Message</button>

          {status && <p className="status-text">{status}</p>}
        </form>
      </div>
    </div>
  );
}
