import React, { useState } from 'react';
import '../App.css'

const Contact = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', 'a445ecd4-3299-4fff-a7b1-8a368b6aaf60');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setPopupMessage('Email sent successfully!');
      setIsPopupVisible(true);

      // Hide the popup after 3 seconds
      setTimeout(() => {
        setIsPopupVisible(false);
      }, 3000);
    } else {
      setPopupMessage('Failed to send email. Please try again.');
      setIsPopupVisible(true);

      setTimeout(() => {
        setIsPopupVisible(false);
      }, 3000);
    }
  };

  return (
    <div id="contact" className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Popup Message */}
      {isPopupVisible && (
        <div className="popup">
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
