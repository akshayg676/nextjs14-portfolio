import React from "react";
import { Section } from "./index";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div id="contact">
      <section className={styles.contact}>
        <Section tag="let's chat" />
        <form
          action="https://formsubmit.co/1516ba5ad0078b149254b4b6dc62e8a5"
          method="POST"
          data-aos="zoom"
        >
          <input type="hidden" name="_template" defaultValue="table" />
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="name"
              name="name"
              data-aos="fade-up"
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              data-aos="fade-up"
            />
            <input
              type="hidden"
              name="_autoresponse"
              defaultValue="Hi there! It's me Akshay G. I just wanted to let you know I received your message and will get back to you as soon as possible."
            />
            <input
              type="hidden"
              name="_next"
              defaultValue="https://www.akshayg.tech/#contact"
            />
          </div>
          <div className={styles.inputBox}>
            <input
              type="number"
              name="number"
              placeholder="number"
              data-aos="fade-up"
            />
            <input
              type="text"
              name="subject"
              placeholder="subject"
              data-aos="fade-up"
            />
          </div>
          <textarea
            name="message"
            placeholder="your message"
            id=""
            cols={30}
            rows={10}
            data-aos="fade-up"
            defaultValue={""}
          />
          <input
            type="submit"
            value="Send message"
            className={styles.contactBtn}
          />
        </form>
      </section>
    </div>
  );
};

export default Contact;
