import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import SocialButtons from "./socialButtons";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-800">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-8 bg-white rounded">
        {children}
      </main>

      <footer className="bg-gray-800">
      <SocialButtons></SocialButtons>
      <div className="text-white mt-5 text-center" >  This blog is part of my{" "}
            <a
              href="https://twitter.com/ggangix/status/1328031248808349696?s=20"
              target="blank"
              className="font-bold hover:underline text-opacity-50"
            >
              #100DaysOfCode
            </a> challenge.
            <a
              className="font-bold text-xs no-underline hover:underline block  "
              href="/privacy"
            >
              Privacy Policy
            </a>
            </div>
            
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
