import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import VerticalTimeline from "../components/verticalTimeline";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="items-center m-8">
        <p className="mb-4">
          My name is Giuseppe and I am IT Enginner, currently working in Barcelona, Spain
          as a Software Enginner at Rinkel. I was born in Venezuela in an
          immigrant family from Italy and Colombia.
        </p>
        <p className="mb-4">
          I have been working in jobs related with computers and code since I
          was a teenager, thanks to that I was able to take care of me and my
          family since early ages in a really unstable country, and for this
          reason my vision about the life and work is always taking
          responsabilities and working step by step but with the future goal in
          mind.
        </p>
        <p className="mb-4">
          This is a brief summary about my professional life in the last years.
          If you have any question, please feel free to{" "}
          <a
            className="font-bold underline hover:no-underline"
            href="mailto:me@giuseppe.xyz"
          >
            Contact me
          </a>
          .
        </p>
      </section>

      <VerticalTimeline></VerticalTimeline>
    </Layout>
  );
}

export default AboutPage;
