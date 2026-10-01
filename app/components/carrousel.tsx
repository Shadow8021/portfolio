import Image from "next/image";
const technologies = [
  { name: "linux", Icon: "linux" },
  { name: "docker", Icon: "docker" },
  { name: "TypeScript", Icon: "ts" },
  { name: "Laravel", Icon: "laravel" },
  { name: "Flutter", Icon: "flutter" },
  { name: "Tailwind CSS", Icon: "tailwindcss" },
  { name: "Node.js", Icon: "nodejs" },
  { name: "PostgreSQL", Icon: "postgresql" },
  { name: "Nextjs", Icon: "next" },
  { name: "Git", Icon: "git" },
  { name: "Docker", Icon: "docker" },
  { name: "Figma", Icon: "figma" },
  { name: "Python", Icon: "py" },
  { name: "PHP", Icon: "php" },
  { name: "C++", Icon: "cpp" },
  { name: "SQLite", Icon: "sqlite" },
  { name: "VS Code", Icon: "vscode" },
  { name: "Android Studio", Icon: "androidstudio" },
  { name: "Postman", Icon: "postman" },
  { name: "PyCharm", Icon: "pycharm" },
];

function TechnologyList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="tech-marquee-list" aria-hidden={duplicate || undefined}>
      {technologies.map(({ name, Icon }) => (
        <li className="tech-marquee-item" key={name}>
          <Image
            className="h-8 w-8"
            src={`https://skillicons.dev/icons?i=${Icon}`}
            alt={name}
            width={32}
            height={32}
            unoptimized
          />
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
