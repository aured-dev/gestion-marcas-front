"use client";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import "./globals.css";
import Card from "./components/ui/Card";
import Breadcrumb from "./components/Breadcrumb";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <html lang="es">
      <body className="flex bg-gray-100">
        {/* Menu llateral */}
        <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />

        {/* Carga opción seleccionado*/}
        <main
          className={`flex-1 p-2 transition-all duration-300 ${isOpen ? "ml-10" : "ml-10"
            }`}
        >
          <Breadcrumb/>
          <Card>
            {children}
          </Card>
        </main>
      </body>
    </html>
  );
}


