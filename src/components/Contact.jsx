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
  const [errorMsg, setErrorMsg] = useState(""); // For in-page error display

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
    setErrorMsg(""); // Clear previous error
    if (!serviceID || !templateID || !publicKey) {
      setErrorMsg("Sorry, the email service is temporarily unavailable.");
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
      console.error("EmailJS error:", error); // Log for debugging
      setErrorMsg(
        "Sorry, your message could not be sent. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300"
    >
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
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:underline flex items-center gap-2"
                >
                  📧 {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center">
                <span className="sr-only">Phone:</span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:underline flex items-center gap-2"
                >
                  📞 {personalInfo.phone}
                </a>
              </div>

              <div className="flex items-center">
                <span className="sr-only">Location:</span>
                <span className="flex items-center gap-2">
                  📍 {personalInfo.location}
                </span>
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
                {errorMsg && (
                  <div className="text-red-600 dark:text-red-400 font-medium">
                    {errorMsg}
                  </div>
                )}

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-black border-2 border-black/20 dark:border-white/20 rounded-lg focus:border-black dark:focus:border-yellow-500 focus:outline-none transition-colors duration-200"
                  disabled={isLoading}
                />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-black border-2 border-black/20 dark:border-white/20 rounded-lg focus:border-black dark:focus:border-yellow-500 focus:outline-none transition-colors duration-200"
                  disabled={isLoading}
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-black border-2 border-black/20 dark:border-white/20 rounded-lg focus:border-black dark:focus:border-yellow-500 focus:outline-none transition-colors duration-200 resize-none"
                  disabled={isLoading}
                />

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
