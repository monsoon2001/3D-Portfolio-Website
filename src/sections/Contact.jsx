import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_rzyl70e",
        "template_230q9rh",
        {
          from_name: form.name,
          to_name: "Monsoon",
          from_email: form.email,
          to_email: "monsoon.parajuli74@gmail.com",
          message: form.message,
        },
        "9m94rv2UxGG5isVSP"
      );

      setLoading(false);

      alert("Your message has been sent!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //service_0okmusl
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex justify-center items-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <h3 className="heat-text">Let&apos;s talk</h3>

          <p className="text-lg text-white-600">
            Whether you&apos;re looking for a new project, want to collaborate,
            or just want to say hi, I&apos;d love it if you reached out.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Full Name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label htmlFor="" className="space-y-3">
              <span className="field-label">Email</span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label htmlFor="" className="space-y-3">
              <span className="field-label">Your Message</span>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi I'm interested in ..."
              />
            </label>

            <button className="field-btn " type="submit">
              {loading ? "Sending" : "Send Message"}
            </button>

            <img
              src="/assets/arrow-up.png"
              alt="arrow-up"
              className="field-btn_arrow"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
