"use client";

import { useState} from "react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Clientes", href: "#clientes" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-white/6"
      style={{
        background: "rgba(26,26,27,0.92)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex flex-col leading-none">
          <span className="text-[17px] font-extrabold text-white tracking-tight">
            SOLUMECI SAS
          </span>
          <span className="text-[9.5px] font-semibold tracking-[2px] uppercase text-white/25 mt-0.5">
            Metálicas y Civiles
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-brand-gray hover:text-white hover:bg-white/6 px-4 py-1.5 rounded-md transition-all"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contacto"
            className="ml-2 text-[13.5px] font-semibold text-white bg-brand-red hover:bg-brand-red-light px-5 py-1.5 rounded-md transition-colors"
          >
            Contacto
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.25 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"  
        >
          <span className={`block w-5 h-0.5 bg-brand-gray rounded transition-all duration-200 ${open ? 'translate-y-1.75 rotate-45 bg-white' : ''}`} />
          <span className={`block w-5 h-0.5 bg-brand-gray rounded transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-brand-gray rounded transition-all duration-200 ${open ? '-translate-y-1.75 -rotate-45 bg-white' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden border-t border-white/6 overflow-hidden transition-all duration-300 ${open ? 'max-h-64' : 'max-h-0'}`}>
        <div className="px-6 py-2 flex flex-col">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-brand-gray hover:text-white hover:bg-white/4 px-2 py-3 rounded-md transition-all border-b border-white/4 last:border-0">
              {link.label}
            </a>
          ))}
          <a href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-3 mb-3 text-center text-sm font-semibold text-white bg-brand-red hover:bg-brand-red-light py-2.5 rounded-md transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
