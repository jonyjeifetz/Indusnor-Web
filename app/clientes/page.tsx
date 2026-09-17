"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { Mail, MapPin, Building, ShieldCheck, CheckCircle2 } from "lucide-react";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.332 5.006L2 22l5.127-1.336a9.981 9.981 0 004.885 1.321h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.039-5.176-2.926-7.062A9.914 9.914 0 0012.012 2zm.004 18.171h-.003a8.31 8.31 0 01-4.237-1.163l-.304-.181-3.146.82.839-3.058-.198-.313a8.297 8.297 0 01-1.272-4.474c0-4.576 3.722-8.3 8.303-8.3 2.217 0 4.301.865 5.867 2.433 1.566 1.567 2.428 3.652 2.427 5.871 0 4.577-3.723 8.301-8.276 8.305zm4.551-6.216c-.25-.125-1.478-.729-1.707-.812-.229-.083-.396-.125-.562.125-.167.25-.646.812-.792.979-.146.166-.292.187-.542.062a6.837 6.837 0 01-2.012-1.238 7.55 7.55 0 01-1.393-1.733c-.146-.25 0-.381.119-.505.11-.114.25-.292.375-.438.125-.146.167-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.562-1.354-.771-1.854-.204-.488-.413-.422-.563-.429-.142-.007-.304-.007-.466-.007s-.425.061-.647.302c-.222.241-.852.833-.852 2.031 0 1.199.873 2.355.996 2.521.123.167 1.718 2.623 4.161 3.678.581.25 1.035.399 1.389.512.584.185 1.116.159 1.536.096.468-.07 1.478-.604 1.687-1.188.208-.583.208-1.083.146-1.188-.063-.104-.229-.187-.479-.312z"/>
    </svg>
  );
}

const getWhatsAppUrl = () => 
  `https://wa.me/5491125705184?text=${encodeURIComponent("Hola! Quisiera consultar sobre provisión de insumos para una obra/proyecto.")}`;

interface ClientCompany {
  id: number;
  name: string;
  sector: string;
  description: string;
}

const CLIENTS: ClientCompany[] = [
  {
    id: 1,
    name: "Empresas de Logística y Depósitos",
    sector: "Operaciones Logísticas",
    description: "Equipamiento de andenes con rampas niveladoras, abrigos retráctiles y puertas seccionales de alta velocidad."
  },
  {
    id: 2,
    name: "Constructoras e Instaladoras de Redes",
    sector: "Construcción Industrial",
    description: "Provisión directa de caños ranurados IRAM 2502, rociadores UL/FM y acoples para instalaciones contra incendio."
  },
  {
    id: 3,
    name: "Desarrolladores de Naves Industriales",
    sector: "Real Estate Industrial",
    description: "Suministro de macrofibras para refuerzo estructural de suelos y soluciones térmicas para cerramientos."
  }
];

export default function ClientesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      <section className="bg-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-blue-600/20 text-blue-400 font-semibold text-xs tracking-wider uppercase px-3 py-1 rounded-full mb-3 border border-blue-500/30">
            Confianza y Trayectoria
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Empresas que nos Eligen y Eligieron</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Acompañamos a constructoras, parques logísticos e industrias de todo el país brindando insumos certificados y atención directa.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Pilares de confianza */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4">
            <ShieldCheck className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Normas Certificadas</h3>
              <p className="text-xs text-slate-500 mt-1">Cumplimiento de estándares de seguridad UL/FM e IRAM 2502 en cada provisión.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4">
            <Building className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Atención a Grandes Obras</h3>
              <p className="text-xs text-slate-500 mt-1">Capacidad logística para abastecer requerimientos por volumen a tiempo.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4">
            <CheckCircle2 className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Venta Directa sin Intermediarios</h3>
              <p className="text-xs text-slate-500 mt-1">Precios competitivos y trato comercial transparente con los desarrolladores.</p>
            </div>
          </div>
        </div>

        {/* Sectores / Rubros que atendemos */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Sectores donde operamos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENTS.map((client) => (
            <div key={client.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 inline-block mb-3">
                  {client.sector}
                </span>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{client.name}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {client.description}
                </p>
              </div>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center space-x-2 transition-colors text-center"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>Solicitar Asesoramiento</span>
              </a>
            </div>
          ))}
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
              <li>
                <a href="https://maps.google.com/?q=Parque+Industrial+Norlog+Buenos+Aires" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2.5 hover:text-blue-400 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>Parque Industrial Norlog, Buenos Aires</span>
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