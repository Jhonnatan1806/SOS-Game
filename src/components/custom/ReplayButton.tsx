import React from "react";

interface ReplayButtonProps {
    handleReplay: () => void;
    isUIDisabled: boolean;
}

export default function ReplayButton({
    isUIDisabled,
    handleReplay,
}: ReplayButtonProps) {
    return (
        <button
            className="bg-blue-500 text-white px-6 py-2 rounded font-bold disabled:bg-slate-400"
            onClick={handleReplay}
            disabled={isUIDisabled}>
            REPRODUCIR
        </button>
    );
}
