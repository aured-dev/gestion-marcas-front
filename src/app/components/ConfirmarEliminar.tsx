"use client";

import * as AlertDialog from "@radix-ui/react-alert-dialog";

export function ConfirmarEliminar({ onConfirm }: { onConfirm: () => void }) {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
                <button className="px-3 py-1 text-xs rounded-md bg-red-100 text-red-700 hover:bg-red-200 transition">
                    Eliminar
                </button>
            </AlertDialog.Trigger>

            <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
                <AlertDialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-lg">
                    <AlertDialog.Title className="text-lg font-semibold">¿Estás seguro?</AlertDialog.Title>
                    <AlertDialog.Description className="mt-2 text-sm text-gray-500">
                        Esta acción no se puede deshacer. El registro será eliminado permanentemente.
                    </AlertDialog.Description>

                    <div className="mt-4 flex justify-end gap-2">
                        <AlertDialog.Cancel asChild>
                            <button className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300">Cancelar</button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action asChild>
                            <button
                                onClick={onConfirm}
                                className="px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700"
                            >
                                Sí, eliminar
                            </button>
                        </AlertDialog.Action>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    );
}
