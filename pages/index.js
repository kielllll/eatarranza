import Head from "next/head";
import Project from "../components/Project";
import Experience from "../components/Experience";
import styles from "../styles/Home.module.css";

export default function Home() {
  const featuredProjects = [
    {
      name: "Peformance Analysis: TOTP Algorithm",
      description: "A research project during my final year in college.",
      image: "/images/none.png",
      repoLink: "https://github.com/kielllll/thesis-ui",
      productionLink: "https://thesis-totp.herokuapp.com/",
      tags: ["nuxt.js", "html", "css", "heroku"],
    },
    {
      name: "Digital Knowmad",
      description:
        "A capstone project during my web development bootcamp with Zuitt.",
      image: "/images/none.png",
      repoLink:
        "https://gitlab.com/tuitt/students/batch95/ezekiel-tarranza/csp2/app-client",
      productionLink: "https://zeke-csp2-app-client.glitch.me/",
      tags: ["html", "css", "javascript"],
    },
    {
      name: "Budget Wiser",
      description:
        "A capstone project during my web development bootcamp with Zuitt.",
      image: "/images/none.png",
      repoLink: "https://gitlab.com/kielllll/csp3-client",
      productionLink: "https://csp3-client-je4pi3m7s-kielllll.vercel.app/",
      tags: ["next.js", "html", "css", "vercel"],
    },
    {
      name: "Web Portfolio",
      description:
        "My own web portfolio. Inspiored by Benjanmin Carlson's Profile",
      image: "/images/none.png",
      repoLink: "https://github.com/kielllll/web-portfolio",
      productionLink: "https://csp3-client-iota.vercel.app/",
      tags: ["next.js", "html", "css", "vercel"],
    },
  ];

  const experiences = [
    {
      company: "Summit Digital",
      role: "Automations / Web Developer",
      duration: "March 2021 - Present",
      jobType: ["Part Time"],
      description:
        "Develop Lead Funnels and Automations through GoHighLevel CRM, LeadsHook, and Integration Platforms i.e Zapier, Pipedream.",
    },
    {
      company: "itGenius",
      role: "Software Engineer",
      duration: "August 2019 - Present",
      jobType: ["Full Time"],
      description:
        "Developing Web Applications, API Integrations, Automations, and Data Visualization using Google Data Studio",
    },
    {
      company: "Concentrix",
      role: "Technical Support Expert",
      duration: "June 2019 - August 2019",
      jobType: ["Full Time"],
      description: "Provide seamless solutions to the consumers.",
    },
    {
      company: "itGenius",
      role: "Software Engineer",
      duration: "October 2018 - February 2019",
      jobType: ["Intern"],
      description:
        "Assist on Senior Engineers on the Web Development and API integrations.",
    },
  ];

  return (
    <div>
      <Head>
        <title>Home | Ezekiel Tarranza</title>
      </Head>

      <section>
        <h1>
          Hi there! I'm Ezekiel Tarranza, an aspirant Full-Stack Developer,
          tech-enthusiast, and a potato!
        </h1>
        <p>
          I find developing things fun! I explore, get in awe, and learn how to
          do it. I do really love to work in groups as it is one of my forms of
          socializing, making me a very good team-player!
        </p>
        <hr />
      </section>

      <section>
        <h2>Featured Projects</h2>
        {featuredProjects.map((featuredProject, e) => (
          <div key={e} className={styles.child}>
            <Project project={featuredProject} />
          </div>
        ))}
        <hr />
      </section>

      <section>
        <h2>Experience</h2>
        {experiences.map((experience, e) => (
          <div key={e} className={styles.child}>
            <Experience experience={experience} />
          </div>
        ))}
        <hr />
      </section>

      <section>
        <h2>Education</h2>
        <hr />
      </section>

      <section>
        <h2>Tech Stack</h2>
        <hr />
      </section>
    </div>
  );
}
