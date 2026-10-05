"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Nuestra Red", href: "/red" },
    { name: "Sostenibilidad", href: "/sostenibilidad" },
  ];

  return (
    <nav className="bg-savan-blue text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          {/* ... dentro de tu Navbar, reemplaza el <div> del Logo con esto: */}
            <div className="flex-shrink-0">
                <Link href="/">
                    <Image 
                        src="/logo.svg" // Asegúrate de que el nombre coincida con tu archivo en public/
                        alt="Savan Group Logo" 
                        width={150} 
                        height={50} 
                        className="object-contain"
                    />
                </Link>
            </div>
          
          {/* Menú Escritorio */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-savan-green transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contacto"
                className="bg-savan-green text-savan-blue hover:bg-white transition-colors px-4 py-2 rounded-md text-sm font-bold"
              >
                Contáctanos
              </Link>
            </div>
          </div>

          {/* Botón de Menú Móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-savan-green focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-savan-lightBlue"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block hover:text-savan-green px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="block text-savan-blue bg-savan-green px-3 py-2 rounded-md text-base font-bold mt-4 text-center mx-2"
              onClick={() => setIsOpen(false)}
            >
              Contáctanos
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}