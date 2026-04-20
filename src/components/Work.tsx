import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "World Tech Monitor",
    category: "AI  System",
    stack: "LLMs, LangGraph, Python, Vector Search, RAG   ",
  },
  {
    name: "Quantum Migration Decision Engine",
    category: "AI Intelligence System",
    stack: "LLMs, GraphRAG, OASIS, Node.js, ",
  },
  {
    name: "[FILL — PQC Tool]",
    category: "Deep Tech",
    stack: "Cryptography, PQC, Systems Design",
  },
  {
    name: "[FILL — Quantum Simulation]",
    category: "Emerging Tech",
    stack: "Python, Simulation, Research Prototyping",
  },
  {
    name: "[FILL — Multi-Agent System]",
    category: "AI Systems",
    stack: "Agents, Orchestration, RAG, Execution Loops",
  },
  {
    name: "[FILL — Emerging Tech Platform]",
    category: "Products",
    stack: "Full-stack, Architecture, Product",
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
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
