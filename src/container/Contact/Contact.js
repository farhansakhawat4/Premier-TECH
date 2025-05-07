import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title">Get in Touch with Us!</h2>
        <p className="contact-subtitle">
          Please fill in the form, and someone from the Premier team will contact you within 2 business days.
        </p>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name" className="contact-input" required />
            <input type="email" placeholder="Email Address" className="contact-input" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Company Name" className="contact-input" />
            <select className="contact-input" required>
              <option value="">Select an Option</option>
              <option value="option1">Sales</option>
              <option value="option2">Support</option>
              <option value="option3">General Inquiry</option>
            </select>
          </div>
          <textarea
            placeholder="Write your Question Here"
            className="contact-textarea"
            rows="5"
            required
          ></textarea>
          <div className="submit-container">
            <button type="submit" className="submit-button">SUBMIT</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
