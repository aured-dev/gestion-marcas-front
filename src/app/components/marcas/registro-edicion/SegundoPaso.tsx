import Input from "../../ui/Input";

interface Props {
    data: {
        nombre: string;
        titular: string;
    };
    setData: React.Dispatch<React.SetStateAction<any>>;
}

export default function SgundoPaso({ data, setData }: Props) {
    return (
        <div>
            <h2 className="text-xl text-center font-bold mb-4">Información del titular</h2>
            <Input placeholder="Titular de la marca" value={data.titular}
                            onChange={(e) => setData({ ...data, titular: e.target.value })}
                        />
        </div>
    );
}
