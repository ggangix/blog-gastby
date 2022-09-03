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
      <div id="title" className="text-2xl mb-5">
        Hello, Hola, Ciao, Hallo👋!
      </div>
      <section className="presentation flex flex-wrap -mx-1 overflow-hidden">
        <div className="my-1 px-1 w-2/3 overflow-hidden">
          <p>
            I am an IT Engineer. I work mostly as a Web Developer, I like to
            code and learn about technology every day. I am a Linux user since I
            was a child, I have been in multiple Tech Talks and Hackatons
            because I truly believe that share knowlege is the the best way to
            progress as a society.{" "}
          </p>
          <br></br>
          <p>
            Apart from work, I like running, and I try to practice it every other day, I am close to reach my goal of run 1022km in this year.

            I have good sense of humor, and I like to perform Stand up Comedy in some places in Barcelona.

            If you want to know more about me,
            <a
              href="about"
              className="font-bold hover:underline text-opacity-50"
            >
              please visit the About page
            </a>
          </p>
        </div>

        <div className="ml-8 px-1 overflow-hidden">
          <img src="https://github.com/ggangix.png" className="w-40"></img>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
