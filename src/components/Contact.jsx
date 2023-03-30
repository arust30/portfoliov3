import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { InlineWidget } from "react-calendly";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h0bjfod",
        "template_u8np72g",
        form.current,
        "_9sPC-R9huWnQ7KA-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="pt-24 pb-12 mx-20 items-center">
      <h2 className="text-4xl font-bold text-primary mb-8">Contact Me</h2>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 border-2 border-primary-variant rounded-lg">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-primary mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="border-2 border-primary-variant rounded-lg p-2 w-full text-white bg-transparent"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-primary mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="border-2 border-primary-variant rounded-lg p-2 w-full text-white bg-transparent"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-primary mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Your Message"
                required
                className="border-2 border-primary-variant rounded-lg p-2 w-full text-white bg-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white rounded-lg py-2 px-6 font-medium"
            >
              Send
            </button>
          </form>
          <div className="mt-8">
            <a
              href="mailto:andrewrust30@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-white font-medium mb-4"
            >
              <MdOutlineEmail className="mr-2" /> Email Me Directly Instead!
            </a>
            <a
              href="https://calendly.com/andrew-rust"
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-white rounded-lg py-2 px-6 font-medium"
            >
              Set up a Calendly Meeting with Me!
            </a>
          </div>
        </div>
        <div className="calendly__block">
          <InlineWidget
            styles={{
              border: "2px solid #2081c3",

              height: "102%",
              width: "100%",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            url="https://calendly.com/andrew-rust/networking?hide_gdpr_banner=1"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;