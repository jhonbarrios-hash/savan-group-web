import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-10 border-t-4 border-savan-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
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
            
          <p className="text-sm text-gray-400">
            Te conectamos al ecosistema digital de Colombia con soluciones confiables y escalables.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/nosotros" className="hover:text-savan-green">Nosotros</Link></li>
            <li><Link href="/servicios" className="hover:text-savan-green">Servicios</Link></li>
            <li><Link href="/red" className="hover:text-savan-green">Nuestra Red</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Colombia</li>
            <li>info@savangroup.co</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-800 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Savan Group. Todos los derechos reservados.
      </div>
    </footer>
  );
}