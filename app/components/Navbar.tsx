"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.332 5.006L2 22l5.127-1.336a9.981 9.981 0 004.885 1.321h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.039-5.176-2.926-7.062A9.914 9.914 0 0012.012 2zm.004 18.171h-.003a8.31 8.31 0 01-4.237-1.163l-.304-.181-3.146.82.839-3.058-.198-.313a8.297 8.297 0 01-1.272-4.474c0-4.576 3.722-8.3 8.303-8.3 2.217 0 4.301.865 5.867 2.433 1.566 1.567 2.428 3.652 2.427 5.871 0 4.577-3.723 8.301-8.276 8.305zm4.551-6.216c-.25-.125-1.478-.729-1.707-.812-.229-.083-.396-.125-.562.125-.167.25-.646.812-.792.979-.146.166-.292.187-.542.062a6.837 6.837 0 01-2.012-1.238 7.55 7.55 0 01-1.393-1.733c-.146-.25 0-.381.119-.505.11-.114.25-.292.375-.438.125-.146.167-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.562-1.354-.771-1.854-.204-.488-.413-.422-.563-.429-.142-.007-.304-.007-.466-.007s-.425.061-.647.302c-.222.241-.852.833-.852 2.031 0 1.199.873 2.355.996 2.521.123.167 1.718 2.623 4.161 3.678.581.25 1.035.399 1.389.512.584.185 1.116.159 1.536.096.468-.07 1.478-.604 1.687-1.188.208-.583.208-1.083.146-1.188-.063-.104-.229-.187-.479-.312z"/>
    </svg>
  );
}

const getWhatsAppUrl = () =>
  `https://wa.me/5491125705184?text=${encodeURIComponent("Hola! Quisiera realizar una consulta comercial.")}`;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const navLinks = [
    { name: "Inicio", href: "#inicio", id: "inicio" },
    { name: "Productos", href: "#productos", id: "productos" },
    { name: "Nuestras Naves", href: "#naves", id: "naves" },
    { name: "Proyectos y Entregas", href: "#proyectos", id: "proyectos" },
    { name: "Clientes", href: "#clientes", id: "clientes" },
    { name: "Contacto", href: "#contacto", id: "contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Si scrolleamos hasta el final de la página (bottom), marcamos contacto inmediatamente
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveSection("contacto");
      }
    };

    const sectionIds = navLinks.map((link) => link.id);
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.1,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        // Solo actualiza por intersección si no estamos en el final absoluto
        const isAtBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
        
        if (entry.isIntersecting && !isAtBottom) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 sm:h-32 flex items-center justify-between py-2">
        <div className="flex items-center space-x-4">
          <Link href="#inicio" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Indusnor Logo" 
              className="h-24 sm:h-32 w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-6 font-medium text-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`transition-all duration-200 ${
                  isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center space-x-2 transition-all shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Cotizar por WhatsApp</span>
          </a>
        </div>

        <button 
          type="button"
          className="lg:hidden text-slate-600 p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-3 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`block font-medium py-2 border-b border-slate-100 ${
                  isActive ? "text-blue-600 font-bold" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-emerald-600 text-white text-xs font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 mt-2"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Cotizar por WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}