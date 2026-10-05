import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Aquí importamos el Navbar y el Footer
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savan Group | Conectividad Empresarial Colombia",
  description: "Integramos carriers, ISP y empresas con soluciones de conectividad confiables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-savan-gray min-h-screen flex flex-col`}>
        {/* Aquí usamos el componente Navbar */}
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}