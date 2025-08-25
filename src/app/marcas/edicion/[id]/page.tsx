"use client";

import { useState, useEffect } from "react";
import PrimerPaso from "@/app/components/marcas/registro-edicion/PrimerPaso";
import SegundoPaso from "@/app/components/marcas/registro-edicion/SegundoPaso";
import TercerPaso from "@/app/components/marcas/registro-edicion/TercerPaso";
import { useRouter } from "next/navigation";
import { actualizarMarca } from "@/app/service/MarcaService";

export default function Edicion({ id }: { id: string }) {
    const [step, setStep] = useState(1);
    const router = useRouter();
    const [formData, setFormData] = useState({
        nombre: "",
        titular: ""
    });

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleActualizar = async (id: number) => {
        try {
            const marcaActualizada: Marca = {
                nombre: "Marca Editada",
                titular: "Titular Editado",
                estado: "A",
            };
            const data = await actualizarMarca(id, marcaActualizada);

        } catch (error: any) {
            alert(error.message || "Error al editar la marca");
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="flex items-center justify-between mb-6">
                {[1, 2, 3].map((n) => (
                    <div key={n} className="flex-1 text-center">
                        <div
                            className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center 
                ${step >= n ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"}`}
                        >
                            {n}
                        </div>
                        <p className="mt-2 text-sm">{`Paso ${n}`}</p>
                    </div>
                ))}
            </div>
            {step === 1 && <PrimerPaso data={formData} setData={setFormData} />}
            {step === 2 && <SegundoPaso data={formData} setData={setFormData} />}
            {step === 3 && <TercerPaso data={formData} />}

            <div className="flex justify-between mt-6">
                {step === 1 && (
                    <button
                        onClick={() => router.push("/marcas")}
                        className="px-4 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Regresar
                    </button>
                )}
                {step > 1 && (
                    <button
                        onClick={prevStep}
                        className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                    >
                        Atrás
                    </button>
                )}
                {step < 3 ? (
                    <button
                        onClick={nextStep}
                        disabled={!formData.nombre && step == 1 || !formData.titular && step == 2} // Bloquea si están vacíos
                        className={`ml-auto px-4 py-2 rounded-lg text-white transition
                        ${!formData.nombre && step == 1 || !formData.titular && step == 2
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600"
                            }`}
                    >
                        Continuar
                    </button>
                ) : (
                    <button
                        onClick={handleActualizar.bind(null, parseInt(id))}
                        className="ml-auto px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
                    >
                        Actualizar
                    </button>
                )}
            </div>
        </div>
    );
}
