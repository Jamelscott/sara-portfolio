import { Mail } from "lucide-react";
import LinkedInIcon from "./LinkedInIcon";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: <LinkedInIcon size={20} />,
    },
    {
      name: "Email",
      url: "mailto:fadelsa19@gmail.com",
      icon: <Mail size={20} />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Sara Prattis</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            I design intuitive, engaging learning experiences across K-12,
            higher education, corporate, and public-sector projects -- in both
            English and French.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors focus-outline p-2 rounded-lg"
                aria-label={`Visit my ${link.name} profile`}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sara. All rights reserved. Built with
              React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
