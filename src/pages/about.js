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

      <section className="flex flex-col items-center md:flex-row m-8">
      <p>My name is Giuseppe and I am IT Enginner, currently working in Germany as a Software Developer at Foxxum GmbH. I was born in Venezuela in an immigrant family from Italy and Colombia.</p>  

      </section>
  
      <VerticalTimeline></VerticalTimeline>
    </Layout>
  );
}

export default AboutPage;
