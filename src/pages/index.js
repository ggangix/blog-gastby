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
      <div id="title" className="text-3xl mb-5">
       Hello, Hola, Ciao, Hallo👋! 
      </div>
      <section className="presentation flex flex-wrap -mx-1 overflow-hidden">
        <div className="my-1 px-1 w-2/3 overflow-hidden">
          <p>
           I am an IT Engineer. I work mostly as a Web Developer, I like to code and learn about technology each day. I am a Linux
            user since I was a child, I have been in multiple Tech Talks and
            Hackatons because I truly believe that share knowlege is the the best
            way to progress as a society.{" "}
          </p>
          <br></br>
          <p>
            I enjoy to share time with my family and try to travel around the
            world with my lovely wife. If do you like to see my full history,{" "}
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
      <LastPosts></LastPosts>
    </Layout>
  );
}

export default IndexPage;
