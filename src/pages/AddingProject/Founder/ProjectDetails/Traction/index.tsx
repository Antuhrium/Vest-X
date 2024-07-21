import { useRef, useEffect, useState } from "react";
import TractionInner from "./Traction";
import styles from "./styles.module.scss";
import TopInvestors from "./TopInvestors";
import Advisors from "./Advisors";
import Partner from "./Partners";
import Roadmap from "./Roadmap";
import AdditionalTraction from "./AdditionalTraction";

const sections = [
  { id: "traction", label: "Traction", Component: TractionInner },
  { id: "investors", label: "Investors", Component: TopInvestors },
  { id: "advisors", label: "Advisors", Component: Advisors },
  { id: "partners", label: "Partner", Component: Partner },
  { id: "roadmap", label: "Roadmap", Component: Roadmap },
  {
    id: "additional-traction",
    label: "Additional",
    Component: AdditionalTraction,
  },
];

export default function Traction() {
  const [activeSection, setActiveSection] = useState<string>("traction");
  const [scrollProgress, setScrollProgress] = useState<{
    [key: string]: number;
  }>({});

  const sectionRefs = useRef<{
    [key: string]: IntersectionObserverEntry | null;
  }>({});

  useEffect(() => {
    const handleScroll = () => {
      const newScrollProgress = { ...scrollProgress };
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const height = rect.height;
          const scrolled = Math.min(Math.max(rect.top * -1, 0), height);
          newScrollProgress[section.id] = (scrolled / height) * 100;
        }
      });

      const containerHeight = Array.from(
        document.getElementsByTagName("div")
      ).filter((x) => x.className.includes("_container_"))[0].clientHeight;

      const isBottom = window.innerHeight + window.scrollY >= containerHeight;

      if (isBottom) {
        sections.forEach((section) => {
          newScrollProgress[section.id] = 100;
        });
      }

      setScrollProgress(newScrollProgress);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        sectionRefs.current[entry.target.id] = entry;
        const visibleSections = Object.values(sectionRefs.current).filter(
          (section) => section && section.intersectionRatio > 0
        );

        if (visibleSections.length === 1) {
          setActiveSection(visibleSections[0]?.target.id ?? "traction");
        } else if (visibleSections.length > 1) {
          const mostVisibleSection = visibleSections.reduce((prev, curr) =>
            prev && curr && prev.intersectionRatio > curr.intersectionRatio
              ? prev
              : curr
          );
          setActiveSection(mostVisibleSection?.target.id ?? "traction");
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.1, 0.9],
    };

    const observer = new IntersectionObserver(observerCallback, options);
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [scrollProgress]);

  return (
    <div className={styles.tractionContainer}>
      <nav className={styles.navbar}>
        <div className={styles.sectionLinksContainer} style={{}}>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`
              ${styles.navLink} 
              ${activeSection === section.id ? styles.active : ""}
            `}
            >
              <span
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                {section.label}
              </span>
              <div className={styles.progressBarContainer}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${scrollProgress[section.id] || 0}%` }}
                />
              </div>
            </a>
          ))}
        </div>
      </nav>
      {sections.map(({ id, Component }) => (
        <section
          key={id}
          id={id}
          className={styles.section}
          style={{
            marginTop: id === "traction" ? "0" : "24px",
            padding: id === "traction" ? "0" : "24px 0px",
          }}
        >
          <Component />
        </section>
      ))}
    </div>
  );
}
