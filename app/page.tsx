"use client";

import React, { useState } from "react";
import { 
  Search, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  FileText, 
  Menu,
  X
} from "lucide-react";

// Icono Oficial de WhatsApp
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.332 5.006L2 22l5.127-1.336a9.981 9.981 0 004.885 1.321h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.039-5.176-2.926-7.062A9.914 9.914 0 0012.012 2zm.004 18.171h-.003a8.31 8.31 0 01-4.237-1.163l-.304-.181-3.146.82.839-3.058-.198-.313a8.297 8.297 0 01-1.272-4.474c0-4.576 3.722-8.3 8.303-8.3 2.217 0 4.301.865 5.867 2.433 1.566 1.567 2.428 3.652 2.427 5.871 0 4.577-3.723 8.301-8.276 8.305zm4.551-6.216c-.25-.125-1.478-.729-1.707-.812-.229-.083-.396-.125-.562.125-.167.25-.646.812-.792.979-.146.166-.292.187-.542.062a6.837 6.837 0 01-2.012-1.238 7.55 7.55 0 01-1.393-1.733c-.146-.25 0-.381.119-.505.11-.114.25-.292.375-.438.125-.146.167-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.562-1.354-.771-1.854-.204-.488-.413-.422-.563-.429-.142-.007-.304-.007-.466-.007s-.425.061-.647.302c-.222.241-.852.833-.852 2.031 0 1.199.873 2.355.996 2.521.123.167 1.718 2.623 4.161 3.678.581.25 1.035.399 1.389.512.584.185 1.116.159 1.536.096.468-.07 1.478-.604 1.687-1.188.208-.583.208-1.083.146-1.188-.063-.104-.229-.187-.479-.312z"/>
    </svg>
  );
}

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Rampa Hidráulica (Dock Leveler)",
    category: "Naves Industriales",
    description: "Solución de nivelación para andenes de carga y descarga en depósitos e industrias logísticas.",
    image: "/images/rampa.jpg",
    badge: "Destacado"
  },
  {
    id: 2,
    name: "Puerta Seccional Industrial",
    category: "Naves Industriales",
    description: "Paneles de poliuretano expandido para aislamiento térmico, seguridad y cierre hermético.",
    image: "/images/puerta.png",
  },
  {
    id: 3,
    name: "Sprinkler Victaulic V3403 Upright K11.2",
    category: "Redes Contra Incendio",
    description: "Rociador automático 68°C BSPT con certificaciones internacionales UL/FM para protección industrial.",
    image: "/images/sprinkler.jpg",
    badge: "UL / FM"
  },
  {
    id: 4,
    name: "Acople Ranurado 2\" UL/FM",
    category: "Redes Contra Incendio",
    description: "Conexión rápida y flexible para tuberías de redes contra incendio con homologación UL/FM.",
    image: "/images/acople.png",
    badge: "UL / FM"
  },
  {
    id: 5,
    name: "Caños de Incendio IRAM 2502",
    category: "Redes Contra Incendio",
    description: "Pintados de rojo y ranurados para fácil ensamblaje técnico en instalaciones de protección.",
    image: "/images/canos.jpg",
  },
  {
    id: 6,
    name: "Macrofibra de Polipropileno",
    category: "Aditivos para Hormigón",
    description: "Refuerzo estructural para contrapisos, pavimentos e industrial flooring evitando fisuras.",
    image: "/images/macrofibra.png",
  }
];

const getWhatsAppUrl = (productName?: string) => {
  const text = productName 
    ? `Hola! Quisiera solicitar presupuesto y ficha técnica de: ${productName}` 
    : `Hola! Quisiera realizar una consulta comercial sobre sus productos.`;
  return `https://wa.me/5491125705184?text=${encodeURIComponent(text)}`;
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = ["Todos", "Naves Industriales", "Redes Contra Incendio", "Aditivos para Hormigón"];

  // Filtrado robusto tolerante a espacios y mayúsculas
  const filteredProducts = PRODUCTS.filter((p) => {
    const categoryMatch =
      selectedCategory === "Todos" ||
      p.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase();

    const searchMatch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans" id="top">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-32 sm:h-40 flex items-center justify-between py-2">
          <div className="flex items-center space-x-4">
            <a 
              href="#top" 
              onClick={(e) => { e.preventDefault(); handleScrollTop(); }}
              className="flex items-center cursor-pointer"
            >
              <img 
                src="/images/logo.png" 
                alt="Indusnor Logo" 
                className="h-32 sm:h-44 w-auto object-contain"
              />
            </a>
            <span className="text-xs sm:text-sm text-slate-500 hidden lg:inline-block border-l pl-4 border-slate-300">
              Soluciones para Naves Industriales <br /> & Redes Contra Incendio
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 font-medium text-slate-600 text-base">
            <a 
              href="#top" 
              onClick={(e) => { e.preventDefault(); handleScrollTop(); }}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Inicio
            </a>
            <a href="#productos" className="hover:text-blue-600 transition-colors">
              Productos
            </a>
            <a href="#contacto" className="hover:text-blue-600 transition-colors">
              Contacto
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-3 rounded-lg flex items-center space-x-2 transition-all shadow-sm"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

          <button 
            type="button"
            className="md:hidden text-slate-600 p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-3 shadow-lg">
            <a 
              href="#top"
              onClick={(e) => { e.preventDefault(); handleScrollTop(); }}
              className="block text-slate-700 font-medium py-2 border-b border-slate-100"
            >
              Inicio
            </a>
            <a 
              href="#productos" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-slate-700 font-medium py-2 border-b border-slate-100"
            >
              Productos
            </a>
            <a 
              href="#contacto" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-slate-700 font-medium py-2 border-b border-slate-100"
            >
              Contacto
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 mt-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600/20 text-blue-400 font-semibold text-xs tracking-wider uppercase px-3 py-1 rounded-full mb-4 border border-blue-500/30">
              Venta Directa a Todo el País
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Equipamiento e Infraestructura Industrial de Alta Resistencia
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Ofrecemos productos novedosos para la construcción. Especialistas en soluciones para naves industriales y redes contra incendio. Comprá sin intermediarios, con atención personalizada y precios competitivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#productos"
                className="bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold px-6 py-3.5 rounded-lg transition-all shadow-md"
              >
                Ver Catálogo de Productos
              </a>
              <a
                href={getWhatsAppUrl("Presupuesto General / Cotización por Volumen")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-white text-center font-semibold px-6 py-3.5 rounded-lg border border-slate-700 transition-all flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Solicitar Presupuesto</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <ShieldCheck className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Normas y Calidad</h4>
              <p className="text-xs text-slate-500">Componentes con certificaciones UL/FM e IRAM 2502.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <Truck className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Logística Nacional</h4>
              <p className="text-xs text-slate-500">Envíos directos a obra o depósito en todo el país.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
            <WhatsAppIcon className="w-10 h-10 text-emerald-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Atención Especializada</h4>
              <p className="text-xs text-slate-500">Asesoramiento técnico para pliegos y proyectos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog / Products Section */}
      <section id="productos" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Catálogo Industrial</h2>
            <p className="text-slate-500 text-sm mt-1">Explorá nuestras soluciones técnicas o buscá el insumo que necesitás.</p>
          </div>

          <div className="mt-4 md:mt-0 relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por producto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Botones de Categorías */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer select-none ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grilla de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <div key={p.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="relative h-56 bg-slate-100 overflow-hidden flex items-center justify-center p-4">
                  <img 
                    src={p.image} 
                    alt={p.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded shadow-sm border border-slate-200">
                      {p.category}
                    </span>
                  </div>
                  {p.badge && (
                    <span className="absolute top-3 right-3 text-[11px] font-bold text-amber-800 bg-amber-100/95 backdrop-blur-sm border border-amber-300 px-2 py-0.5 rounded shadow-sm">
                      {p.badge}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{p.name}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">{p.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={getWhatsAppUrl(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center space-x-2 transition-colors text-center"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>Consultar Cotización por WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500 text-sm">No encontramos productos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-wide mb-3">INDUSNOR</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Soluciones integrales para naves industriales, logística y redes contra incendio. Venta directa y cobertura en toda la Argentina.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contacto Comercial</h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a 
                  href={getWhatsAppUrl()}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 hover:text-emerald-400 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                  <span>+54 9 11 2570-5184 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Indusnorconstruye@gmail.com" 
                  className="flex items-center space-x-2.5 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-500" />
                  <span>Indusnorconstruye@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=Parque+Industrial+Norlog+Buenos+Aires" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 hover:text-blue-400 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>Parque Industrial Norlog, Buenos Aires</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Atención Directa</h4>
            <p className="text-xs text-slate-400 mb-4">
              ¿Tenés un pliego de condiciones o querés solicitar una cotización por volumen? Hablá directamente con nuestro equipo.
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg items-center space-x-2 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Contactar Asesor Técnico</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-900 text-center text-xs text-slate-600">
          © 2026 por Jonathan Jeifetz
        </div>
      </footer>
    </div>
  );
}