"use client";

import Link from "next/link";
import { Menu, LayoutDashboard, Landmark } from "lucide-react";

export default function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {
    return (
        <aside
            className={`h-screen bg-blue-100 shadow-md transition-all duration-300 flex flex-col
        ${isOpen ? "w-64" : "w-20"}`}
        >
            <div className="flex items-center justify-between p-4 border-b border-blue-200">
                <span className={`font-bold text-blue-800 transition-all ${isOpen ? "block" : "hidden"}`}>
                    Menú de Opciones
                </span>
                <button onClick={toggleSidebar} className="text-blue-800 hover:text-blue-600">
                    <Menu size={22} />
                </button>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                <Link
                    href="/"
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-200 text-blue-900"
                >
                    <LayoutDashboard size={20} />
                    {isOpen && <span>Home</span>}
                </Link>
                <div className="flex items-center justify-between p-4 border-b border-blue-300">
                    <span className={`font-bold text-blue-800 transition-all ${isOpen ? "block" : "hidden"}`}>
                        Servicios
                    </span>
                </div>
                <Link
                    href="/marcas"
                    className="flex items-center gap-2 px-3 py-2 rounded-md bg-blue-400 text-white hover:bg-blue-600"
                >
                    <Landmark size={20} />
                    {isOpen && <span>Gestión de marcas</span>}
                </Link>
            </nav>
        </aside>
    );
}




