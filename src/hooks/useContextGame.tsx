'use client'
import React, { createContext, useContext, useState } from "react";

interface GameContextType {
	gameType: string;
	gameMode: string;
	gameDifficulty: string;
    gameSize: number;
	setGameType: (type: string) => void;
	setGameMode: (mode: string) => void;
	setGameDifficulty: (difficulty: string) => void;
    setGameSize: (size: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGameContext = () => useContext(GameContext);

interface GameProviderProps {
	children: React.ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
	const [gameType, setGameType] = useState("Simple");
	const [gameMode, setGameMode] = useState("PvP");
	const [gameDifficulty, setGameDifficulty] = useState("Fácil");
    const [gameSize, setGameSize] = useState(3);

	const value: GameContextType = {
		gameType,
		gameMode,
		gameDifficulty,
        gameSize,
		setGameType,
		setGameMode,
		setGameDifficulty,
        setGameSize,
	};

	return (
		<GameContext.Provider value={value}>{children}</GameContext.Provider>
	);
};
