import { useState } from "react";
import { personalInfo } from "./data";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "Hi Adarsh, I want to connect with you...",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_USER_ID;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      const emailName = value.split("@")[0];
      setFormData((prev) => ({
        ...prev,
        email: value,
        name:
          prev.name === "" || prev.name.startsWith(prev.email?.split("@")[0])
            ? emailName
            : prev.name,
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!serviceID || !templateID || !publicKey) {
      alert("Email service is not configured properly. Please try later.");
      return;
    }

    setIsLoading(true);
    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          title: "New Contact Form Submission",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        publicKey
      );
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "Hi Adarsh, I want to connect with you...",
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300"
    >
      {/* SEO Meta */}
      <Helmet>
        <meta
          name="description"
          content={`Contact ${personalInfo.name}, Backend Developer & Full-Stack Enthusiast. Reach out via email or phone for collaborations, projects, or professional inquiries.`}
        />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In{" "}
          <span className="text-black dark:text-yellow-400 transition-colors">
            Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                Let's Connect
              </h3>
              <p className="text-black/80 dark:text-white/80 mb-6">
                I'm always interested in new opportunities and collaborations.
                Reach out if you'd like to work together!
              </p>
            </div>

            <address className="space-y-4 not-italic text-black dark:text-white">
              <div className="flex items-center">
                <span className="sr-only">Email:</span>
                <svg
                  className="w-6 h-6 text-black dark:text-yellow-400 mr-4 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:underline"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center">
                <span className="sr-only">Phone:</span>
                <svg
                  className="w-6 h-6 text-black dark:text-yellow-400 mr-4 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:underline"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div className="flex items-center">
                <span className="sr-only">Location:</span>
                <svg
                  className="w-6 h-6 text-black dark:text-yellow-400 mr-4 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{personalInfo.location}</span>
              </div>
            </address>
          </div>

          {/* Contact Form */}
          <div>
            {isSubmitted ? (
              <div className="text-center py-12 text-black dark:text-white">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-black/80 dark:text-white/80">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-black border-2 border-black/20 dark:border-white/20 rounded-lg focus:border-black dark:focus:border-yellow-500 focus:outline-none transition-colors duration-200"
                  disabled={isLoading}
                />

                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-black border-2 border-black/20 dark:border-white/20 rounded-lg focus:border-black dark:focus:border-yellow-500 focus:outline-none transition-colors duration-200"
                  disabled={isLoading}
                />

                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-black border-2 border-black/20 dark:border-white/20 rounded-lg focus:border-black dark:focus:border-yellow-500 focus:outline-none transition-colors duration-200 resize-none"
                  disabled={isLoading}
                ></textarea>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-black dark:bg-yellow-400 text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-yellow-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
