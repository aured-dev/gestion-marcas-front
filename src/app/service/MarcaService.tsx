const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const getMarcas = async () => {
    try {
        const res = await fetch(`${API_URL}/marcas`, {
            headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error("Error al obtener las marcas");

        return await res.json();
    } catch (error: any) {
        throw { message: error.message || "Error desconocido" };
    }
};

export const getMarca = async (id:number) => {
    try {
        const res = await fetch(`${API_URL}/marcas/${id}`, {
            headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error("Error al obtener las marcas");

        return await res.json();
    } catch (error: any) {
        throw { message: error.message || "Error desconocido" };
    }
};

export const registrarMarca = async (data: Marca) => {
    try {
        const res = await fetch(`${API_URL}/marcas`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) throw new Error("Error al registrar la marca");

        return await res.json();
    } catch (error: any) {
        throw { message: error.message || "Error desconocido" };
    }
};

export const actualizarMarca = async (id: number, data: Marca) => {
    try {
        const res = await fetch(`${API_URL}/marcas/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) throw new Error("Error al actualizar la marca");

        return await res.json();
    } catch (error: any) {
        throw { message: error.message || "Error desconocido" };
    }
};

export const eliminarMarca = async (id: number) => {
    try {
        const res = await fetch(`${API_URL}/marcas/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error("Error al eliminar la marca");

        return await res.json();
    } catch (error: any) {
        throw { message: error.message || "Error desconocido" };
    }
};
