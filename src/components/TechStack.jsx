import { technologies } from "./data";

const TechStack = () => {
  return (
    <section id="tech" className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Tech <span className="dark:text-yellow-500">Stack</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-lg transition-all duration-300 text-center group hover:dark:border-yellow-500"
            >
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white group-hover:dark:text-yellow-500 transition-colors duration-300">
                {tech.name}
              </h3>
              <p className="text-sm text-black/60 dark:text-white/60">
                {tech.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
