import { ProjectCard } from "./ProjectCard";
import styles from "./Styles/ProjectsSection.module.css";
// import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
// import { SiRedux } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import Fade from "react-reveal/Fade";
const projects = [
  {
    name: "Bobbi-Brown Clone",
    img: "/BobbiImage.png",
    link: "https://gymshark-team-shark.vercel.app/",
    git: "https://github.com/mdarshadkhan1998/Bobbi-Brown-Cosmetics/tree/main/bobbi-brown",
    about:
      "“An e-commerce website of Cosmetics beauty products. Implemented features to get data from backend,Created routes and Methods,Implemented Dynamic cart functionality",
    stacks: [
      <SiNodedotjs className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Amazon Clone",
    img: "/Amazon.png",
    link: "https://amazonclone007.herokuapp.com/",
    git: "https://github.com/krRahul10/AMAZON-CLONE",
    about:
      "“An e-commerce website for products. Implemented features to get data from backend,Methods,Implemented Dynamic cart functionality and login and sign up functionality and complete authentication",

    stacks: [
      <SiCss3 className={styles.stackIcon} />,
      <SiNodedotjs className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
    ],
  },
];
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  );
}
