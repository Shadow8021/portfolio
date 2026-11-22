import React from "react";
import { motion } from "motion/react";
const serves = [
  {
    id: 1,
    nom: "Applications web",
    descript:
      "Des produits web robustes, de l'API à l'interface, pensés pour durer et évoluer.",
  },
  {
    id: 2,
    nom: "Mobile",
    descript:
      "Des applications iOS et Android fluides qui trouvent naturellement leur place dans la vie des gens.",
  },
  {
    id: 3,
    nom: "Direction technique",
    descript:
      "Architecture, choix de stack et accompagnement pour avancer avec moins de friction.",
  },
];
export default function Services() {
  return (
    <section className="services section-wrap" id="services">
      <p className="section-label">04 / Ce que je fais</p>
      <div className="section-heading">
        <span>Une approche, plusieurs terrains de jeu</span>
      </div>

      <div className="service-grid ">
        {serves.map((el, index) => (
          <motion.div
            key={el.id}
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: "easeOut",
            }}
          >
            <span className="service-index">{el.id}</span>
            <h3>{el.nom}</h3>
            <p>{el.descript}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
