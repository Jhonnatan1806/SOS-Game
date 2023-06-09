"use client";
import React, { useState, useEffect} from "react";
import { useRouter } from 'next/navigation';
import ButtonBack from "@/components/core/ButtonBack";
import Flex from "@/components/core/Flex";
import Layout from "@/components/core/Layout";
import Switch from "@/components/core/Switch";
import Modal from "@/components/core/Modal";
import { useGameContext } from "@/hooks/useContextGame";
import { FaSadTear } from "react-icons/fa";


export default function SettingGame() {
    const gameContext = useGameContext();
    const router = useRouter();
    const [gameSize, setGameSize] = useState(3);
    const [gameType, setGameType] = useState<string>("Simple");
    const [gameMode, setGameMode] = useState<string>("PvP");
    const [gameDifficulty, setGameDifficulty] = useState<string>("Fácil");
    const [modal, setModal] = useState(false);
    
	function handleDecrement() {
		if (gameSize > 3) {
			setGameSize(gameSize - 1);
		}
	}

	function handleIncrement() {
		if (gameSize < 9) {
			setGameSize(gameSize + 1);
		}
	}

    const handleGameTypeChange = (option: string) => {
        setGameType(option);
    };

    const handleGameModeChange = (option: string) => {
        setGameMode(option);
    };

    const handleGameDifficultyChange = (option: string) => {
        setGameDifficulty(option);
    };

    const handleStartGame = () => {
        gameContext?.setGameSize(gameSize);
        gameContext?.setGameType(gameType);
        gameContext?.setGameMode(gameMode);
        gameContext?.setGameDifficulty(gameDifficulty);
        if(gameType === "General"){
            setModal(true);
            return;
        };
        router.push("/start");
    };

    const handleCloseModal = () => {
        setModal(false);
    };
    
	return (
		<>
            {
                modal && <Modal onClose={handleCloseModal}>
                    <Flex className="flex-col flex-wrap items-center py-4 gap-4 text-slate-700">
                        <FaSadTear size={48}/>
                        <p>Lo sentimos el tipo de juego <strong>General</strong> aún no se encuentra implementado.</p>
                    </Flex>
                </Modal>
            }
			<Layout>
				<Flex className="flex-col grow">
					<ButtonBack />
					<Flex className="flex-col justify-center grow gap-4 text-slate-700">
						<h1 className="text-4xl font-bold underline">AJUSTES</h1>
                        <h2 className="text-2xl font-bold">
							Seleccione el tipo de juego
						</h2>
						<Switch options={["Simple", "General"]} onOptionChange={handleGameTypeChange}/>
						<h2 className="text-2xl font-bold">
							Seleccione el modo de juego
						</h2>
						<Switch options={["PvP", "PvC", "CvC"]} onOptionChange={handleGameModeChange}/>
						<h2 className="text-2xl font-bold">
							Seleccione la dificultad
						</h2>
						<Switch options={["Facil", "Intermedio", "Dificil"]} onOptionChange={handleGameDifficultyChange}/>
						<h2 className="text-2xl font-bold">
							Seleccione el tamaño
						</h2>
						<Flex className="flex-row gap-2">
							<button
								className="w-fit cursor-pointer select-none bg-blue-500 text-white font-bold py-2 px-4 rounded"
								onClick={handleDecrement}
							>
								-
							</button>
							<input
								type="text"
								value={gameSize}
								readOnly
								className="bg-gray-300 font-bold rounded max-w-[40px] h-[40px] px-2 focus:outline-none shadow-inner text-center"
							/>
							<button
								className="w-fit cursor-pointer select-none bg-blue-500 text-white font-bold py-2 px-4 rounded"
								onClick={handleIncrement}
							>
								+
							</button>
						</Flex>
						<button onClick={handleStartGame} className="w-fit bg-blue-500 text-2xl px-6 py-2 rounded font-bold text-white">INICIAR</button>
					</Flex>
				</Flex>
			</Layout>
		</>
	);
}
