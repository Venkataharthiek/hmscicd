import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Get in Touch</h2>
      <p className="contact-intro">
        Need assistance or want to book an appointment? Our team is here to
        answer your queries and provide guidance on all hospital services.
      </p>

      <div className="contact-grid">
        {/* ===== CONTACT DETAILS ===== */}
        <div className="contact-info">
          <h3>Hospital Location</h3>
          <p>
            City Care Hospital<br />
            123 Health Avenue,<br />
            Hyderabad, Telangana – 500001
          </p>

          <h3>Call Us</h3>
          <p>+91 98765 43210</p>

          <h3>Email Support</h3>
          <p>support@citycarehospital.com</p>

          <h3>Visiting Hours</h3>
          <p>
            Monday – Saturday: 8:00 AM – 8:00 PM <br />
            Emergency Services: 24/7
          </p>
        </div>

        {/* ===== CONTACT FORM ===== */}
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
