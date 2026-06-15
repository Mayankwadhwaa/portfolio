import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Project = {
  name: string;
  category: string;
  stack: string;
  image: string;
  link?: string;
};

const projects: Project[] = [
  {
    name: "World Tech Monitor",
    category: "AI  System",
    stack: "LLMs, LangGraph, Python, Vector Search, RAG   ",
    image: "/images/worldtechmonitor.png",
    link: "https://worldtechmonitor.vercel.app/",
  },
  {
    name: "Quantum Migration Decision Engine",
    category: "AI Intelligence System",
    stack: "LLMs, GraphRAG, OASIS, Node.js, ",
    image: "/images/quantumengine.png",
    link: "/quantum-engine.html",
  },
  {
    name: "M.I.N.D",
    category: "Personal Intelligence Operating System",
    stack: "Multi-Agent Orchestration, Autonomous Agent Ecosystems, Loop Engineering",
    image: "/images/mind.png",
    link: "/mind.html",
  },
  {
    name: "Second Brain",
    category: "Personal Knowledge System",
    stack: "Obsidian + Claude Code",
    image: "/images/second-brain.png",
    link: "/second-brain.html",
  },
  {
    name: "PQC Sandbox",
    category: "Post-Quantum Security",
    stack: "Post-Quantum Cryptography, Threat Modeling",
    image: "/images/pqc-sandbox.png",
    link: "/pqc-sandbox.html",
  },
  {
    name: "Moltbook",
    category: "Autonomous AI Agent",
    stack: "Autonomous Agents, LLMs, Social Simulation, APIs",
    image: "/images/moltbook.webp",
    link: "https://www.moltbook.com/u/Kukuclaw",
  },
];

const Work = () => {
  useGSAP(() => {
    const getTranslateX = () => {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return 0;
      const container = document.querySelector(".work-container");
      if (!container) return 0;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      return rect.width * box.length - (rectLeft + parentWidth) + padding;
    };

    const tween = gsap.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
        id: "work",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Stack & focus</h4>
                <p>{project.stack}</p>
              </div>
              <WorkImage
                image={project.image}
                link={project.link}
                alt={project.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
