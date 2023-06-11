import React from "react";

interface ModalWinnerProps {
    winner: string;
    onReset: () => void;
    onExit: () => void;
}

export default function ModalWinner({
    winner,
    onReset,
    onExit,
}: ModalWinnerProps) {
    return (
        <div className="flex flex-col items-center gap-4">
            <p>RESULTADO</p>
            <p className="font-bold">{winner}</p>
            <div className="flex gap-4 flex-wrap text-sm md:text-base">
                <button
                    className="w-fit bg-blue-500 px-6 py-2 rounded font-bold text-white"
                    onClick={onReset}>
                    NUEVO JUEGO
                </button>
                <button
                    className="w-fit bg-slate-400 px-6 py-2 rounded font-bold text-white"
                    onClick={onExit}>
                    SALIR
                </button>
            </div>
        </div>
    );
}
