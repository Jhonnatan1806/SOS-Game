import { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur bg-slate-700 bg-opacity-70">
            <div className="bg-white text-slate-700 w-full md:w-[390px] rounded m-4 p-4 drop-shadow-xl">
                <div className="flex justify-end">
                    <button onClick={onClose}>
                        <FaPlus size={24} className="rotate-45" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}
