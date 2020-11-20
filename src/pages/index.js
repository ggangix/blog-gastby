import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import LastPosts from "../components/lastPosts";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="presentation"></section>
      <LastPosts></LastPosts>
    
    </Layout>
  );
}

export default IndexPage;
