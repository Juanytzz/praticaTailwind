import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-gray-100 shadow-sm sticky top-0 z-50 w-full">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="flex justify-between items-center h-16">
                    {/* Lado esquerdo - Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link
                            to="/"
                            className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors"
                        >
                            HOME
                        </Link>
                    </div>

                    {/* Lado direito - Links */}
                    <div className="hidden md:flex space-x-8">
                        <Link
                            to="/perfiltailwind"
                            className="text-gray-700 hover:text-indigo-600 px-1 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-indigo-500"
                        >
                            Perfil Tailwind
                        </Link>
                        <Link
                            to="/perfilstyledcomponents"
                            className="text-gray-700 hover:text-indigo-600 px-1 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-indigo-500"
                        >
                            Perfil Styled
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}