"use client"
import { useState } from "react"
import Contenaire from "./Contenaire"
import Link from "next/link"
import Image from "next/image"
export default function Navbar() {
  const navItems = ["Work", "Skills", "Services", "About", "Contact"];  
  const [menuOpen, setMenuOpen] = useState(false)
    
  return (
    <nav className="border-b sticky top-0 right-0 z-50 border-[#404060] bg-[#0e0f23] text-[#f5f0e6] w-full h-18 flex items-center">
      <Contenaire className="flex w-full items-center  justify-between ">
         <a className="logo" href="#top" aria-label="Retour en haut" > 
          <div className="flex flex-col items-center justify-center h-auto">
            <Image src={"/ico.png"} alt="logo" width={1000} height={1000} className="w-10 h-10 relative "/>
            <div className="text-[8px] tracking-normal text-[#f6f3efc4]">G&apos;Martial Oyaga</div>
            <span className="text-[8px] font-light tracking-normal">FULL STACK INGENEER</span>
          </div>
          </a>
         <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</Link>
          ))}
        </div>
        <a className="nav-cta" href="#contact">Discutons <span>↗</span></a>
        <button className="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /> <span />
        </button>
      </Contenaire>
    </nav>
  )
}
