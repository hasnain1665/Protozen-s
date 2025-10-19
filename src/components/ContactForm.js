import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    const formUrl = process.env.REACT_APP_FORMSPREE_URL;

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-wrapper">
      <h3 className="form-title">Send us a Message</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your security needs..."
            required
            rows="5"
            className="form-input form-textarea"
          ></textarea>
        </div>

        {status === "success" && (
          <div className="form-success">
            Thank you! Your message has been sent successfully. We'll get back
            to you soon.
          </div>
        )}

        {status === "error" && (
          <div className="form-error">
            There was an error sending your message. Please try again.
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="form-submit-button"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
