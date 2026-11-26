"use client";
import Image from "next/image";
import { MotionConfig, motion } from "motion/react";
import Timeline from "./components/Timeline";
import { ContactCard } from "./components/conatct/contact-card";
import Services from "./components/services";
import Carrousel from "./components/carrousel";
import NetworkAnimation from "./components/ui/anime";
import TextType from "./components/ui/TextType";
import Project from "./components/project";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14 },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Home() {
  const skill = [
    {
      id: 1,
      name: "Frontend",
      description:
        "React · Next.js · TypeScript · Tailwind CSS · Figma · Framer Motion",
    },
    {
      id: 2,
      name: "Backend",
      description: "Node.js · NestJS · PostgreSQL · MySQL · Laravel · MongoDB ",
    },
    {
      id: 4,
      name: "Mobile & outils",
      description: "Flutter · Jest · Git · Docker · Figma",
    },
  ];
  return (
    <MotionConfig reducedMotion="user">
      <main>
        <section className="hero section-wrap" id="top">
          <motion.div
            className="hero-copy"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="eyebrow" variants={heroItemVariants}>
              <span className="status-dot" /> Disponible pour de nouveaux
              projets
            </motion.p>
            <motion.h1
              className="text-red-500 lg:text-nowrap "
              variants={heroItemVariants}
            >
              G&apos;Martial OYAGA
            </motion.h1>
            <motion.div className="min-h-18" variants={heroItemVariants}>
              <h2 className="text-3xl">
                <em>
                  <TextType
                    text={[
                      "Je construis des produits",
                      "digitaux qui comptent",
                      "Happy coding!",
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    deletingSpeed={50}
                    cursorBlinkDuration={0.5}
                  />
                </em>
              </h2>
            </motion.div>

            <motion.p className="hero-intro" variants={heroItemVariants}>
              Développeur full-stack spécialisé dans les expériences web et
              mobiles. Je transforme les idées ambitieuses en outils simples,
              rapides et mémorables.
            </motion.p>
            <motion.div className="hero-actions" variants={heroItemVariants}>
              <a className="button button-dark" href="#work">
                Voir mes projets <span>↓</span>
              </a>
              <a className="text-link" href="#contact">
                Parlons de votre idée <span>↗</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="hero-aside"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          >
            <div className="portrait-frame scale-100 rounded-tl-[3.4rem] rounded-br-[3.4rem] rounded-tr-[1.9px] overflow-hidden relative">
              <Image
                src="/mart.jpg"
                alt="Portrait de Martial OYAGA, développeur full-stack"
                fill
                priority
                sizes="(max-width: 720px) 80vw, 34vw"
              />
            </div>
            <div className="portrait-note">
              <span>Based in</span>
              <strong>Brazzaville / Congo</strong>
            </div>
          </motion.div>
          <motion.div
            className="scroll-cue"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Scroll to explore <span>↓</span>
          </motion.div>
        </section>

        <motion.section
          className="intro-band"
          id="about"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="section-wrap">
            <p className="section-label">01 / À propos</p>
            <div className="intro-layout flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="w-full  max-w-140 shrink-0">
                <NetworkAnimation />
              </div>
              <div className="flex-1  h-80 max-w-155">
                <h2 className=" text-2xl md:text-7xl font-bold">
                  Du premier croquis à la mise en ligne.
                </h2>
                <p className="large-copy">
                  Je m&apos;appelle Martial OYAGA. J&apos;aime les problèmes
                  complexes, les interfaces sans bruit et les équipes qui
                  veulent faire les choses avec intention.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="work section-wrap"
          id="work"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="section-heading">
            <p className="section-label">02 / Projets sélectionnés</p>
            <span>Une sélection récente — 2023 / 2025</span>
          </div>
          <Project />
        </motion.section>

        <motion.section
          className="my-10 section-wrap"
          id="skills"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="section-heading">
            <p className="section-label">03 / Compétences</p>
            <span>Les outils que j&apos;utilise au quotidien</span>
          </div>

          <div className="skills-layout">
            <div className="skills-intro">
              <h2 className="text-2xl md:text-7xl font-bold">
                Une stack solide,
                <br />
                <em>sans dogme.</em>
              </h2>
              <p>
                Je choisis la technologie qui sert le mieux le produit, la
                qualité d&apos;expérience, la sécurité et l&apos;équipe qui va
                le faire vivre.
              </p>
            </div>
            <div className="skill-groups">
              {skill.map((item, index) => (
                <motion.div
                  className="skill-group"
                  key={item.id}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                >
                  <span className="skill-index">
                    {String(item.id).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <Carrousel />

        <Services />
        <motion.section
          className="mt-10 mx-auto max-w-[88%]"
          id="contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ContactCard />
        </motion.section>

        <motion.div
          className="timeline-shell bg-papyrus min-h-screen w-full overflow-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <header className="relative px-4 py-8 text-center">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute left-1/4 top-0 h-32 w-32 rounded-full opacity-10"
                style={{
                  background:
                    "radial-gradient(circle, #d4af37 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute right-1/4 top-10 h-24 w-24 rounded-full opacity-10"
                style={{
                  background:
                    "radial-gradient(circle, #d4af37 0%, transparent 70%)",
                }}
              />
            </div>

            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="mb-4 flex justify-center">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  className="timeline-emblem"
                  aria-hidden="true"
                >
                  <circle
                    cx="30"
                    cy="30"
                    r="25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M30 10 L30 50 M10 30 L50 30"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="8"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  <circle cx="30" cy="30" r="3" fill="currentColor" />
                </svg>
              </div>

              <h2 className="mb-2 font-cinzel text-3xl font-bold tracking-wider text-[#d4af37] md:text-4xl">
                Parcours full-stack
              </h2>

              <p className="font-crimson text-lg italic text-[#c9a959]">
                2020 — aujourd&apos;hui · 6 ans d&apos;expérience
              </p>
            </div>
          </header>

          <Timeline />
        </motion.div>
      </main>
    </MotionConfig>
  );
}
