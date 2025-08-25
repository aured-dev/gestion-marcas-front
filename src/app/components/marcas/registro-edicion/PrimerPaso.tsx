import Input from "../../ui/Input";

interface Props {
    data: {
        nombre: string;
        titular: string;
    };
    setData: React.Dispatch<React.SetStateAction<any>>;
}

export default function PrimerPaso({ data, setData }: Props) {
    return (
        <div>
            <h2 className="text-xl text-center font-bold mb-4">Información de la marca</h2>
            <Input placeholder="Marca a registrar" value={data.nombre}
                onChange={(e) => setData({ ...data, nombre: e.target.value })}
            />
        </div>
    );
}