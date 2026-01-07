import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
      }
    );
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper bg-[#26282a]">
              <img src="/images/project4.png" alt="" />
            </div>
            <div className="text-content">
              <h2>Zenbucks Cafe</h2>
              <p className="text-white-50 md:text-xl">
                An app built with React JS, Typescript, GSAP, & Tailwind CSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#3280ed]">
                <img src="/images/project2.png" alt="" />
              </div>

              <h2>Metrobank Strong Program Web Application</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#6ded87]">
                <img src="/images/project3.png" alt="" />
              </div>

              <h2>ArchiTech - A Education Website for Students</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
