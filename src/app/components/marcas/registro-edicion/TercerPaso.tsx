interface Props {
    data: {
        nombre: string;
        titular: string;
    };
}

export default function TercerPaso({ data }: Props) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4 text-center">Resumen</h2>
            <p><strong>Nombre:</strong> {data.nombre}</p>
            <p><strong>Titular:</strong> {data.titular}</p>
        </div>
    );
}
