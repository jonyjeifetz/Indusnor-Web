"use client";

import React, { useState } from "react";
import { 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  FileText, 
  MessageCircle,
  Menu,
  X
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  badge?: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Rampa Hidráulica (Dock Leveler)",
    category: "Naves Industriales",
    description: "Solución de nivelación para andenes de carga y descarga en depósitos industriales.",
    badge: "Destacado"
  },
  {
    id: 2,
    name: "Puerta Seccional Industrial",
    category: "Naves Industriales",
    description: "Aislamiento térmico y seguridad para accesos logísticos de alto tránsito.",
  },
  {
    id: 3,
    name: "Sprinkler Victaulic V3403 Upright K11.2",
    category: "Redes Contra Incendio",
    description: "Rociador automático con certificación UL/FM para protección industrial.",
    badge: "UL / FM"
  },
  {
    id: 4,
    name: "Acople Ranurado 2\" UL/FM",
    category: "Redes Contra Incendio",
    description: "Conexión rápida y flexible para tuberías de sistemas contra incendio.",
    badge: "UL / FM"
  },
  {
    id: 5,
    name: "Caños de Incendio IRAM 2502",
    category: "Redes Contra Incendio",
    description: "Pintados de rojo y ranurados para fácil ensamblaje técnico.",
  },
  {
    id: 6,
    name: "Macrofibra de Polipropileno",
    category: "Aditivos para Hormigón",
    description: "Refuerzo estructural para contrapisos, pavimentos e industrial flooring.",
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = ["Todos", "Naves Industriales", "Redes Contra Incendio", "Aditivos para Hormigón"];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === "Todos" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsApp = (productName?: string) => {
    const text = productName 
      ? `Hola! Quisiera solicitar presupuesto y ficha técnica de: ${productName}` 
      : `Hola! Quisiera realizar una consulta comercial sobre sus productos.`;
    window.open(`https://wa.me/5491125705184?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-slate-900 text-white font-extrabold text-2xl tracking-wider px-3 py-1 rounded">
              INDUSNOR
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline-block border-l pl-3 border-slate-300">
              Soluciones para Naves Industriales <br /> & Redes Contra Incendio
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 font-medium text-slate-600 text-sm">
            <a href="#inicio" className="hover:text-blue-600 transition-colors">Inicio</a>
            <a href="#productos" className="hover:text-blue-600 transition-colors">Productos</a>
            <a href="#nosotros" className="hover:text-blue-600 transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleWhatsApp()}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg flex items-center space-x-2 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Cotizar por WhatsApp</span>
            </button>
          </div>

          <button 
            className="md:hidden text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-3">
            <a href="#inicio" className="block text-slate-600 font-medium">Inicio</a>
            <a href="#productos" className="block text-slate-600 font-medium">Productos</a>
            <a href="#nosotros" className="block text-slate-600 font-medium">Nosotros</a>
            <a href="#contacto" className="block text-slate-600 font-medium">Contacto</a>
            <button
              onClick={() => handleWhatsApp()}
              className="w-full bg-emerald-600 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Cotizar por WhatsApp</span>
            </button>
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
              Especialistas en componentes para redes contra incendio, equipamiento para naves logísticas y aditivos para construcción. Atención personalizada y precios sin intermediarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#productos"
                className="bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold px-6 py-3.5 rounded-lg transition-all shadow-md"
              >
                Ver Catálogo de Productos
              </a>
              <button
                onClick={() => handleWhatsApp()}
                className="bg-slate-800 hover:bg-slate-700 text-white text-center font-semibold px-6 py-3.5 rounded-lg border border-slate-700 transition-all flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Solicitar Presupuesto</span>
              </button>
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
            <MessageCircle className="w-10 h-10 text-emerald-600 flex-shrink-0" />
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

          {/* Search bar */}
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

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <div key={p.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                    {p.category}
                  </span>
                  {p.badge && (
                    <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                      {p.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{p.name}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">{p.description}</p>
              </div>

              <button
                onClick={() => handleWhatsApp(p.name)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Consultar Cotización</span>
              </button>
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
            <div className="bg-white text-slate-900 font-extrabold text-xl tracking-wider px-3 py-1 rounded inline-block mb-4">
              INDUSNOR
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Soluciones integrales para naves industriales, logística y redes contra incendio. Venta directa y cobertura en toda la Argentina.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contacto Comercial</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+54 9 11 2570-5184</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>Indusnorconstruye@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>Parque Industrial Norlog, Buenos Aires</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Atención Directa</h4>
            <p className="text-xs text-slate-400 mb-4">
              ¿Tenés un pliego de condiciones o querés solicitar una cotización por volumen? Hablá directamente con nuestro equipo.
            </p>
            <button
              onClick={() => handleWhatsApp()}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contactar Asesor Técnico</span>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-900 text-center text-xs text-slate-600">
          © 2026 por Jonathan Jeifetz
        </div>
      </footer>
    </div>
  );
}