export default function Services({ darkMode }) {
  const services = [
    {
      title: "Web Design",
      description:
        "Modern, clean and responsive website designs for all devices.",
      icon: "🎨",
    },
    {
      title: "Frontend Development",
      description:
        "Professional websites using HTML, CSS, JavaScript, React and Tailwind CSS.",
      icon: "💻",
    },
    {
      title: "Responsive Design",
      description:
        "Perfect layouts for Desktop, Tablet and Mobile devices.",
      icon: "📱",
    },
    {
      title: "UI / UX Design",
      description:
        "Beautiful and user-friendly interfaces for better experience.",
      icon: "✨",
    },
    {
      title: "Website Maintenance",
      description:
        "Updating, improving and fixing websites for better performance.",
      icon: "🛠️",
    },
    {
      title: "Performance Optimization",
      description:
        "Fast loading speed and optimized websites for SEO.",
      icon: "⚡",
    },
  ];

  return (
    <section
      className={`py-4 transition-all duration-500 ${
        darkMode ? "bg-[#050816] text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* HEADING */}
        <div className="text-center mb-20">

          <p
            className="uppercase tracking-[5px] font-medium mb-3"
            style={{ color: "var(--primary)" }}
          >
            What I Offer
          </p>

          <h1 className="heading">
            My <span style={{ color: "var(--primary)" }}>Services</span>
          </h1>

          <p
            className={`max-w-3xl mx-auto mt-6 ${
              darkMode ? "text-gray-400" : "text-slate-600"
            }`}
          >
            I provide professional frontend development services to build
            modern, responsive and high-quality websites.
          </p>

        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                darkMode
                  ? "bg-[#0f172a] border-gray-700"
                  : "bg-slate-50 border-gray-200"
              }`}
            >
              {/* ICON */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "white",
                }}
              >
                {service.icon}
              </div>

              {/* TITLE */}
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--primary)" }}
              >
                {service.title}
              </h2>

              {/* DESCRIPTION */}
              <p
                className={`leading-7 mb-8 ${
                  darkMode ? "text-gray-400" : "text-slate-600"
                }`}
              >
                {service.description}
              </p>

              {/* BUTTON */}
              {/* <button
                className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "white",
                }}
              >
                Learn More
              </button> */}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}