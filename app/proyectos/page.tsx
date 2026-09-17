"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { Mail, Instagram, ArrowUpRight } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.332 5.006L2 22l5.127-1.336a9.981 9.981 0 004.885 1.321h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.039-5.176-2.926-7.062A9.914 9.914 0 0012.012 2zm.004 18.171h-.003a8.31 8.31 0 01-4.237-1.163l-.304-.181-3.146.82.839-3.058-.198-.313a8.297 8.297 0 01-1.272-4.474c0-4.576 3.722-8.3 8.303-8.3 2.217 0 4.301.865 5.867 2.433 1.566 1.567 2.428 3.652 2.427 5.871 0 4.577-3.723 8.301-8.276 8.305zm4.551-6.216c-.25-.125-1.478-.729-1.707-.812-.229-.083-.396-.125-.562.125-.167.25-.646.812-.792.979-.146.166-.292.187-.542.062a6.837 6.837 0 01-2.012-1.238 7.55 7.55 0 01-1.393-1.733c-.146-.25 0-.381.119-.505.11-.114.25-.292.375-.438.125-.146.167-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.562-1.354-.771-1.854-.204-.488-.413-.422-.563-.429-.142-.007-.304-.007-.466-.007s-.425.061-.647.302c-.222.241-.852.833-.852 2.031 0 1.199.873 2.355.996 2.521.123.167 1.718 2.623 4.161 3.678.581.25 1.035.399 1.389.512.584.185 1.116.159 1.536.096.468-.07 1.478-.604 1.687-1.188.208-.583.208-1.083.146-1.188-.063-.104-.229-.187-.479-.312z"/>
    </svg>
  );
}

const getWhatsAppUrl = () => 
  `https://wa.me/5491125705184?text=${encodeURIComponent("Hola! Estuve viendo sus proyectos y quisiera realizar una consulta.")}`;

interface ProjectPost {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
}

const PROJECTS: ProjectPost[] = [
  {
    id: 1,
    title: "Entrega e Instalación de Rampas Hidráulicas",
    category: "Obras y Entregas",
    date: "Reciente",
    description: "Montaje finalizado de niveladores de muelle de carga en nave logística dentro del Parque Industrial Norlog.",
    image: "/images/rampa.png"
  },
  {
    id: 2,
    title: "Montaje de Puertas Seccionales Industriales",
    category: "Instalaciones",
    date: "Reciente",
    description: "Instalación de cerramientos térmicos automatizados para optimización del flujo logístico de mercadería.",
    image: "/images/puerta.png"
  },
  {
    id: 3,
    title: "Inspección de Red Contra Incendio con Válvulas UL/FM",
    category: "Sistemas de Seguridad",
    date: "Reciente",
    description: "Pruebas de presión y montajes de acoples ranurados junto a rociadores Victaulic para certificación industrial.",
    image: "/images/sprinkler.png"
  }
];

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      <section className="bg-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-blue-600/20 text-blue-400 font-semibold text-xs tracking-wider uppercase px-3 py-1 rounded-full mb-3 border border-blue-500/30">
            En Acción
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Proyectos y Entregas</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Explorá nuestro día a día: montaje de equipamiento, instalaciones en obra e inspecciones técnicas de calidad.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="h-60 bg-slate-100 relative overflow-hidden flex items-center justify-center p-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="max-h-full max-w-full object-contain"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded shadow-sm border border-slate-200">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[11px] text-slate-400 font-medium block mb-1">{project.date}</span>
                  <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug">{project.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center space-x-1.5 transition-colors text-center"
                >
                  <span>Consultar por un proyecto similar</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Instagram */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="max-w-xl text-center sm:text-left">
            <div className="inline-flex items-center space-x-2 text-pink-400 font-semibold text-xs uppercase tracking-wider mb-2">
              <Instagram className="w-4 h-4" />
              <span>Comunidad & Novedades</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Seguinos en Instagram para ver más entregas</h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
              Subimos contenido semanal de nuestros trabajos en directo, pruebas de resistencia e ingresos de nuevo stock.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold px-6 py-3.5 rounded-xl transition-all shadow-md flex-shrink-0 flex items-center space-x-2"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>Visitar Perfil de Instagram</span>
          </a>
        </div>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-wide mb-3">INDUSNOR</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Soluciones integrales para naves industriales, logística y redes contra incendio.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contacto Comercial</h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2.5 hover:text-emerald-400 transition-colors">
                  <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                  <span>+54 9 11 2570-5184</span>
                </a>
              </li>
              <li>
                <a href="mailto:Indusnorconstruye@gmail.com" className="flex items-center space-x-2.5 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>Indusnorconstruye@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Atención Directa</h4>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg items-center space-x-2 transition-colors">
              <WhatsAppIcon className="w-4 h-4" />
              <span>Contactar Asesor Técnico</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}