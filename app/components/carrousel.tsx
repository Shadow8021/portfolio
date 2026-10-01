import {
  SiDocker,
  SiExpo,
  SiFigma,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const technologies = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Expo", Icon: SiExpo },
  { name: "Git", Icon: SiGit },
  { name: "Docker", Icon: SiDocker },
  { name: "Figma", Icon: SiFigma },
];

function TechnologyList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="tech-marquee-list" aria-hidden={duplicate || undefined}>
      {technologies.map(({ name, Icon }) => (
        <li className="tech-marquee-item" key={name}>
          <Icon aria-hidden="true" />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Carrousel() {
  return (
    <section className="tech-marquee" aria-label="Technologies utilisées">
      <div className="tech-marquee-track">
        <TechnologyList />
        <TechnologyList duplicate />
      </div>
    </section>
  );
}
