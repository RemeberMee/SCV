import React from "react";
import "../contact/contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4z27soj",
        "template_ypufff8",
        form.current,
        "m4VABWwefZIFc6Cj9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Concact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Message</h4>
            <h5>egatortutorial</h5>
            <a href="https://www.facebook.com/profile.php?id=100014507376505">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Email</h4>
            <h5>namDhgch1907000@gmail.com</h5>
            <a href="mailto:amdhgch1907000@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Call Me</h4>
            <h5>0865227345</h5>
            <a href="https://api.whatsapp.com/send?phone+0865227345">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="massage"
            rows="7"
            placeholder="your Messager"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Massager
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
