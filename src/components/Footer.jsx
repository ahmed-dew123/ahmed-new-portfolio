import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer({ darkMode }) {
  const socials = [
    {
      href: "https://github.com/ahmed-dew123",
      label: "GitHub",
      icon: Github,
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/ahmed-kashif-6665992b2",
      label: "LinkedIn",
      icon: Linkedin,
      external: true,
    },
    {
      href: "mailto:mrahmedkashif78@gmail.com",
      label: "Email",
      icon: Mail,
      external: false,
    },
  ];

  return (
    <footer
      id="contact"
      className={`transition-all duration-500 ${darkMode
          ? "bg-[#050816] text-white border-t border-gray-800"
          : "bg-gray-50 text-slate-900 border-t border-gray-200"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-3 gap-12"
        >

          {/* LEFT */}
          <div>

            <h2 className="text-3xl font-bold mb-5">
              Ahmed{" "}
              <span style={{ color: "var(--primary)" }}>
                Kashif
              </span>
            </h2>

            <p
              className={`leading-8 ${darkMode ? "text-gray-400" : "text-slate-600"
                }`}
            >
              Frontend Developer passionate about creating modern,
              responsive and beautiful websites using React.js,
              Tailwind CSS, JavaScript, HTML and CSS.
            </p>

          </div>

          {/* CONTACT */}
          <div>

            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "var(--primary)" }}
            >
              Contact
            </h3>

            <div className="space-y-4">

              <p>📧 mrahmedkashif78@gmail.com</p>

              <p>📱 +92 348 2865623</p>

              <p>📍 Pakistan,punjab,lahore</p>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "var(--primary)" }}
            >
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <a href="#home" className="hover:text-[var(--primary)] transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-[var(--primary)] transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-[var(--primary)] transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-[var(--primary)] transition">
                  Services
                </a>
              </li>

            </ul>

          </div>

        </motion.div>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-8 mt-14">

          {socials.map(({ href, label, icon: Icon, external }) => (
            <div key={label} className="flex flex-col items-center">
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="social-btn w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "white",
                }}
              >
                <Icon size={20} />
              </a>
              <span className="mt-2 text-sm">{label}</span>
            </div>
          ))}

        </div>

        {/* COPYRIGHT */}
        <div
          className={`border-t mt-12 pt-6 text-center ${darkMode
              ? "border-gray-700 text-gray-400"
              : "border-gray-300 text-slate-600"
            }`}
        >
          © {new Date().getFullYear()} Ahmed Kashif. All Rights Reserved.
        </div>

        {/* BACK TO TOP */}
        <div className="flex justify-center mt-8">

          <a
            href="#home"
            className="social-btn w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "var(--primary)",
              color: "white",
            }}
          >
            <ArrowUp size={20} />
          </a>

        </div>

      </div>
    </footer>
  );
}
