const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-black/10 dark:border-yellow-500 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-black/70 dark:text-white/70">
              © 2024 Adarsh. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            {["home", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-yellow-400 transition-colors duration-200 capitalize"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
