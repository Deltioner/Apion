import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg_icon.png";
import email_icon from "../../assets/email_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import loc_icon from "../../assets/loc_icon.png";
import arrow from "../../assets/arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e3b1a597-5a1f-4254-9b8d-1dd22f785745");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contacts">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Fell free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          comapny community.
        </p>
        <ul>
          <li>
            <img src={email_icon} alt="" />
            Contact@apion.dev
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +31 0638547512
          </li>
          <li>
            <img src={loc_icon} alt="" /> Netherlands Zwolle adjs 23 <br />
            eurpean union
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Send Now <img src={arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
