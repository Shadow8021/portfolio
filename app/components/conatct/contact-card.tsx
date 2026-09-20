import { Mail } from "lucide-react";
import { FaLinkedinIn, FaFacebookF,FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ContactCardCtas } from "./contact-card-ctas";
import { FadeIn } from "@/app/components/ui/motion-primitives";
import { ShaderFlow } from "../shaders/shader-flow";

const CARD_FADE_MASK =
  "radial-gradient(ellipse 90% 110% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.15) 100%)";
const socials=[{
  internal: false,
  href: "https://www.linkedin.com/in/gregor-martial-oyaga-5779b9311/",
  label: "LinkedIn",
  lucideIcon: FaLinkedinIn  
},
{
  internal: false,
  href: "https://www.facebook.com/gregoroyaga3.0/",
  label: "Facebook",
  lucideIcon: FaFacebookF
},
{
  internal: false,
  href: "mailto:gregoyaga@gmail.com",
  label: "Email",
  lucideIcon: Mail
},{
  internal: false,
  href: "https://github.com/Shadow8021",
  label: "GitHub",
  lucideIcon: FaGithub
}
]








export function ContactCard(): ReactNode {
  return (
    <section className=" my-12 w-full max-w-full px-6 sm:my-2 sm:px-10 ">
      
      <FadeIn>
        <div className="contact-card-shell relative w-full overflow-hidden rounded-4xl border p-1.5 shadow-sm">
          <div className="contact-card-inner relative w-full overflow-hidden rounded-[1.6rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-25"
              style={{
                WebkitMaskImage: CARD_FADE_MASK,
                maskImage: CARD_FADE_MASK,
              }}
            >
              <ShaderFlow
                scale={3}
                brightness={1.35}
                colorLowA={[0.176, 0.176, 0.267]}
                colorHighA={[0.831, 0.686, 0.216]}
              />
            </div>

            <div className="relative grid gap-8 p-6 sm:gap-10 sm:p-7 md:grid-cols-[1.2fr_1fr] md:items-stretch md:gap-6 md:p-6">
              <div className="contact-card-copy flex flex-col gap-5">
                <h2>Une idée en tête ?<br /><em>Faisons-la exister.</em></h2>
                <p className="contact-card-description mb-6 max-w-[29ch] text-[18px] leading-[1.4] tracking-tight sm:text-[22px]">
                  I&rsquo;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your visions. Just reach out!
                </p>
                <ContactCardCtas />
              </div>

              <div className="contact-card-social-panel flex flex-col items-center justify-center gap-6 rounded-[1.1rem] border p-6 sm:p-8">
                <div className="flex items-center gap-3 opacity-75">
                  {socials.map((social) => (
                    <SocialIcon
                      key={social.label}
                      href={social.href}
                      label={social.label}
                      lucideIcon={social.lucideIcon}
                    />
                  ))}
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="contact-card-meta text-[13px] tracking-tight">
                    2026 &copy; Built with Next.js
                  </p>
                  <p className="contact-card-meta-muted text-[12px] tracking-tight">
                    By Martial OYAGA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  lucideIcon: LucideIcon,
  imageSrc,
}: {
  href: string;
  label: string;
  lucideIcon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  imageSrc?: string;
}): ReactNode {
  const isExternal = href.startsWith("http");
  const props = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Link
      href={href}
      aria-label={label}
      className="contact-card-social-link focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-colors"
      {...props}
    >
      {LucideIcon ? (
        <LucideIcon className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          width={14}
          height={14}
          aria-hidden="true"
          className="max-h-[14px] max-w-[14px] object-contain dark:invert"
        />
      ) : null}
    </Link>
  );
}