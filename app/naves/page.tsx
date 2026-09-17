"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { Mail, MapPin, Building2, CheckCircle2 } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.332 5.006L2 22l5.127-1.336a9.981 9.981 0 004.885 1.321h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.039-5.176-2.926-7.062A9.914 9.914 0 0012.012 2zm.004 18.171h-.003a8.31 8.31 0 01-4.237-1.163l-.304-.181-3.146.82.839-3.058-.198-.313a8.297 8.297 0 01-1.272-4.474c0-4.576 3.722-8.3 8.303-8.3 2.217 0 4.301.865 5.867 2.433 1.566 1.567 2.428 3.652 2.427 5.871 0 4.577-3.723 8.301-8.276 8.305zm4.551-6.216c-.25-.125-1.478-.729-1.707-.812-.229-.083-.396-.125-.562.125-.167.25-.646.812-.792.979-.146.166-.292.187-.542.062a6.837 6.837 0 01-2.012-1.238 7.55 7.55 0 01-1.393-1.733c-.146-.25 0-.381.119-.505.11-.114.25-.292.375-.438.125-.146.167-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.562-1.354-.771-1.854-.204-.488-.413-.422-.563-.429-.142-.007-.304-.007-.466-.007s-.425.061-.647.302c-.222.241-.852.833-.852 2.031 0 1.199.873 2.355.996 2.521.123.167 1.718 2.623 4.161 3.678.581.25 1.035.399 1.389.512.584.185 1.116.159 1.536.096.468-.07 1.478-.604 1.687-1.188.208-.583.208-1.083.146-1.188-.063-.104-.229-.187-.479-.312z"/>
    </svg>
  );
}

const getWhatsAppUrl = (naveName?: string) => {
  const text = naveName 
    ? `Hola! Quisiera realizar una consulta comercial sobre la nave: ${naveName}` 
    : `Hola! Quisiera realizar una consulta sobre sus naves industriales.`;
  return `https://wa.me/5491125705184?text=${encodeURIComponent(text)}`;
};

interface Nave {
  id: number;
  title: string;
  location: string;
  surface: string;
  description: string;
  features: string[];
  image: string;
}

const NAVES: Nave[] = [
  {
    id: 1,
    title: "Nave Industrial Norlog I",
    location: "Parque Industrial Norlog, Tigre",
    surface: "3.500 m² cubiertos",
    description: "Nave logística de última generación con altura libre de 12m, portones seccionales automáticos y abrigos de muelle integrados.",
    features: [
      "Pisos de hormigón con fibra sintética de alta resistencia",
      "Red contra incendio por sprinklers UL/FM",
      "Aislamiento térmico superior en cubierta y laterales",
      "3 Dock levelers instalados"
    ],
    image: "/images/naves1.png"
  },
  {
    id: 2,
    title: "Nave Centro Logístico Norlog II",
    location: "Parque Industrial Norlog, Tigre",
    surface: "5.200 m² cubiertos",
    description: "Diseñada para logística pesada y almacenamiento de gran escala. Cuenta con amplias playas de maniobra y seguridad 24 hs.",
    features: [
      "Estructura metálica reticulada de gran luz libre",
      "Iluminación LED inteligente y luz natural cenital",
      "Sistema de detección y extinción de incendios",
      "Oficinas administrativas integradas"
    ],
    image: "/images/naves2.png"
  }
];

export default function NavesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      <section className="bg-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-blue-600/20 text-blue-400 font-semibold text-xs tracking-wider uppercase px-3 py-1 rounded-full mb-3 border border-blue-500/30">
            Infraestructura
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Nuestras Naves Industriales</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Desarrollamos y equipamos naves logísticas e industriales estratégicamente ubicadas, preparadas para los más altos estándares operativos.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {NAVES.map((nave) => (
          <div key={nave.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-6 bg-slate-100 min-h-[280px] lg:min-h-full relative overflow-hidden flex items-center justify-center p-4">
              <img 
                src={nave.image} 
                alt={nave.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-blue-600 font-semibold text-xs uppercase tracking-wider mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>{nave.surface}</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-2">{nave.title}</h2>
                
                <p className="flex items-center text-xs text-slate-500 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 mr-1" />
                  {nave.location}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {nave.description}
                </p>

                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">
                  Características Destacadas
                </h3>
                <ul className="space-y-2 mb-6">
                  {nave.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={getWhatsAppUrl(nave.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-6 py-3 rounded-lg items-center justify-center space-x-2 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Consultar Disponibilidad y Detalles</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

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