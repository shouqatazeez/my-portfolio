import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-gray-950 rounded-xl ">
      <div className="container mx-auto px-4 py-6 text-center ">
        <p className="text-sm text-white text-center">
          Built with ❤️ by Me.{" "}
          <a
            href="https://github.com/shouqatazeez/my-portfolio.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Source code available on{" "}
            <span className="underline underline-offset-4">GitHub</span>
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
