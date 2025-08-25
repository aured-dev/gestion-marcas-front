"use client";

import Link from "next/link";
import { ConfirmarEliminar } from "../components/ConfirmarEliminar";
import { useEffect, useState } from "react";
import { eliminarMarca, getMarcas } from "../service/MarcaService";

/*
Estructura de preba para desarrollo sin backend

const marcas = [
    { id: 1, nombre: "Nike", titular: "Juan Pérez", estado: "A" },
    { id: 2, nombre: "Adidas", titular: "Ana Gómez", estado: "I" },
];

*/

export default function MarcasPage() {
    const [marcas, setMarcas] = useState<Marca[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const obtenerMarcas = async () => {
            try {
                const data = await getMarcas();
                setMarcas(data);
            } catch (err: any) {
                setError(err.message || "Error al cargar las marcas");
            } finally {
                setLoading(false);
            }
        };

        obtenerMarcas();
    }, []);


    const handleDelete = async (id: number) => {
        if (!confirm("¿Estás seguro de eliminar esta marca?")) return;

        try {
            await eliminarMarca(id);
            setMarcas(marcas.filter(m => m.id !== id));
        } catch (error: any) {
            alert(error.message || "Error al eliminar la marca");
        }
    };

    return (
        <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
                <h1 className="text-2xl font-bold text-gray-800">Gestión de Marcas</h1>
                <Link
                    href="/marcas/registro"
                    className="px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    + Nueva Marca
                </Link>
            </div>

            {/* Tabla */}
            <div className="overflow-x-auto bg-white shadow-xl rounded-lg border border-gray-200">
                <table className="min-w-full text-sm text-left border-collapse">
                    <thead className="bg-gradient-to-r from-blue-100 to-blue-200 text-gray-700">
                        <tr>
                            <th className="px-6 py-3 border-b font-semibold text-gray-800">#</th>
                            <th className="px-6 py-3 border-b font-semibold text-gray-800">Marca</th>
                            <th className="px-6 py-3 border-b font-semibold text-gray-800">Titular</th>
                            <th className="px-6 py-3 border-b font-semibold text-gray-800">Estado</th>
                            <th className="px-6 py-3 border-b font-semibold text-center text-gray-800">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marcas.map((m, idx) => (
                            <tr
                                key={m.id}
                                className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors duration-200`}
                            >
                                <td className="px-6 py-4 border-b text-gray-700">{m.id}</td>
                                <td className="px-6 py-4 border-b font-medium text-gray-900">{m.nombre}</td>
                                <td className="px-6 py-4 border-b text-gray-700">{m.titular}</td>
                                <td className="px-6 py-4 border-b">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${m.estado === "A" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {m.estado === "A" ? "Activo" : "Inactivo"}
                                    </span>
                                </td>
                                <td className="px-6 py-4 border-b text-center space-x-2">
                                    <Link
                                        href={`/marcas/edicion/${m.id}`}
                                        className="inline-block px-3 py-1 text-xs rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                                    >
                                        Actualizar
                                    </Link>
                                    <ConfirmarEliminar onConfirm={() => handleDelete(m.id!)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}