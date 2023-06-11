import React from "react";
import { FaCog, FaRedo, FaHome } from "react-icons/fa";

interface GameControlsProps {
    onSettings: () => void;
    onReset: () => void;
    onHome: () => void;
}

export default function GameControls({ onSettings, onReset, onHome }: GameControlsProps) {
    return (
        <div className="flex flex-row justify-between text-3xl">
            <button className="flex justify-start gap-2" onClick={onSettings}>
                <FaCog />
            </button>
            <div className="flex gap-4">
                <button
                    className="flex justify-center disabled:text-slate-400 gap-2"
                    onClick={onReset}>
                    <FaRedo />
                </button>
                <button className="flex justify-end gap-2" onClick={onHome}>
                    <FaHome />
                </button>
            </div>
        </div>
    );
}
