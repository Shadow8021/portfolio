"use client";

import { ArrowRight } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactButton } from "./contact-button";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ContactCardCtas(): ReactNode {
  return (
    <LayoutGroup>
      <motion.div
        layout
        transition={{ layout: { duration: 0.55, ease: EASE } }}
        className="hidden mt-2 md:flex flex-wrap items-center gap-3"
      >
        <ContactButton />

        <motion.div
          layout
          transition={{ layout: { duration: 0.55, ease: EASE } }}
        >
          <Link
            href="#projects"
            className="contact-card-secondary-cta focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium shadow-md/2 transition-colors"
          >
            See projects
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
}
