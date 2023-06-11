"use client";
import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";

// core
import Layout from "@/components/core/Layout";
import Flex from "@/components/core/Flex";
import Switch from "@/components/core/Switch";
import Modal from "@/components/core/Modal";

// custom
import Lines from "@/components/custom/Lines";
import TurnIndicator from "@/components/custom/TurnIndicator";
import ReplayButton from "@/components/custom/ReplayButton";
import Scoreboard from "@/components/custom/Scoreboard";
import ModalWinner from "@/components/custom/ModalWinner";
import GameControls from "@/components/custom/GameControls";

// context
import { useGameContext } from "@/utils/useContextGame";

// controllers and classes
import { GameController } from "@/classes/controllers/GameController";
import { Game } from "@/classes/models/Game";

// enums and interfaces
import { GameState } from "@/classes/enums/GameState";
import { GameWinner } from "@/classes/enums/GameWinner";
import { GameMode } from "@/classes/enums/GameMode";
import { Letter } from "@/classes/enums/Letter";
import { Line } from "@/classes/interfaces/Line";
import { Essentials } from "@/classes/interfaces/Essentials";
import { Difficulty } from "@/classes/enums/Difficulty";
import { GameType } from "@/classes/enums/GameType";
import { GamePlayer } from "@/classes/enums/GamePlayers";
import { Movement } from "@/classes/interfaces/Movement";
import GameBoard from "@/components/custom/GameBoard";

export default function GamePlay() {
    // context and routes
    const gameContext = useGameContext();
    const router = useRouter();

    const [gameController, setGameController] = useState<GameController>();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentLetter, setCurrentLetter] = useState<Letter>(Letter.S);
    const [completedLines, setCompletedLines] = useState<Line[]>([]);
    const [isUIDisabled, setIsUIDisabled] = useState<boolean>(false);
    const [isGameInProgress, setIsGameInProgress] = useState<boolean>(false);

    //essentials
    const [essentials] = useState<Essentials>({
        gameSize: gameContext?.gameSize ?? 3,
        gameType: gameContext?.gameType ?? GameType.SIMPLE_GAME,
        gameMode: gameContext?.gameMode ?? GameMode.PVP,
        gameDifficulty: gameContext?.gameDifficulty ?? Difficulty.EASY,
    });

    //additionals
    const [grid, setGrid] = useState<string[][]>([[]]);
    const [winner, setWinner] = useState<GameWinner>(GameWinner.NONE);
    const [currentTurn, setCurrentTurn] = useState<GamePlayer>(
        GamePlayer.PLAYER_ONE
    );
    const [scores, setScores] = useState<number[]>([0, 0]);

    // inicio del juego
    useEffect(() => {
        const game = new Game(
            essentials.gameSize,
            essentials.gameType,
            essentials.gameMode,
            essentials.gameDifficulty
        );
        setGameController(new GameController(game));
        setGrid(game.getBoard().getGrid());
    }, [essentials]);

    // acciones de botones
    const handleCloseModal = (): void => {
        setIsModalOpen(false);
    };

    const handleSettings = (): void => {
        router.push("/settings");
    };

    const handleHome = (): void => {
        router.push("/");
    };

    // reset game
    const handleReset = (): void => {
        gameController?.resetGame();
        updateVariables();
        setCompletedLines([]);
        setIsModalOpen(false);
        setIsUIDisabled(true);
    };

    // repetir jugada
    const handleReplay = async () => {
        if (!gameController) {
            return;
        }

        const movements = gameController.getRecord().getMovements();
        handleReset();

        const delay = (ms: number) =>
            new Promise((resolve) => setTimeout(resolve, ms));

        for (let i = 0; i < movements.length; i++) {
            const movement = movements[i];
            await delay(500);
            executeMovement(movement);
        }
    };

    const executeMovement = (movement: Movement) => {
        writeCell(movement.row, movement.column, movement.letter);
        updateVariables();
        changeTurn();
    };

    // cambiar letra
    const handleLetterChange = (option: string) => {
        option === "S"
            ? setCurrentLetter(Letter.S)
            : setCurrentLetter(Letter.O);
    };

    // escribir en la celda
    const handleCell = (row: number, column: number, letter: Letter): void => {
        setIsGameInProgress(true);

        if (essentials.gameMode === GameMode.CVC) {
            const playComputerTurns = (turnCount: number) => {
                if (turnCount >= essentials.gameSize ** 2 || isFinished()) {
                    return;
                }

                setTimeout(() => {
                    handleComputerTurn();
                    playComputerTurns(turnCount + 1);
                }, 500);
            };

            playComputerTurns(0);
        }

        if (essentials.gameMode === GameMode.PVC) {
            handlePlayerTurn(row, column, letter);
            if (!isFinished()) {
                handleComputerTurn();
            }
        }

        if (essentials.gameMode === GameMode.PVP) {
            handlePlayerTurn(row, column, letter);
        }

        setIsGameInProgress(false);
    };

    const handlePlayerTurn = (
        row: number,
        column: number,
        letter: Letter
    ): void => {
        writeCell(row, column, letter);
        updateVariables();
        changeTurn();
    };

    const handleComputerTurn = async (): Promise<void> => {
        if (!gameController) {
            return;
        }
        const delay = (ms: number) =>
            new Promise((resolve) => setTimeout(resolve, ms));
        await delay(500);

        writeCellBot();
        updateVariables();
        changeTurn();
    };

    // escribir en celda
    const writeCell = (row: number, column: number, letter: Letter): void => {
        if (!gameController || !gameController.makeMove(row, column, letter)) {
            return;
        }
        check(row, column);
    };

    // escribir en celda bot
    const writeCellBot = (): void => {
        if (!gameController) {
            return;
        }
        const [row, col, letter] = gameController.botMove();
        writeCell(row, col, letter);
    };

    // revisar SOS
    const check = (row: number, column: number): void => {
        const checkSOS = gameController?.checkSOS(row, column);
        if (checkSOS) {
            const lines = gameController?.getCompletedSOSLines();
            setCompletedLines(lines ?? []);
        }
    };

    // el juego a finalizado
    const isFinished = (): boolean => {
        if (
            !gameController ||
            gameController.getGameState() === GameState.PLAYING
        ) {
            return false;
        }
        setIsModalOpen(true);
        setIsUIDisabled(false);
        return true;
    };

    // cambiar Turno
    const changeTurn = (): void => {
        if (!gameController || isFinished()) {
            return;
        }
        gameController.changeCurrentPlayer();
    };

    // actualizar
    const updateVariables = (): void => {
        if (!gameController) {
            return;
        }
        setGrid([...gameController.getGame().getBoard().getGrid()]);
        setCurrentTurn(gameController.getCurrentPlayer().getName());
        setWinner(gameController.getWinner());
        setScores(gameController.getScores());
    };

    return (
        <>
            {isModalOpen ? (
                <Modal onClose={handleCloseModal}>
                    <ModalWinner
                        winner={winner}
                        onReset={handleReset}
                        onExit={handleHome}
                    />
                </Modal>
            ) : null}
            <Layout>
                <Flex className="flex-col gap-4 text-slate-700 h-screen">
                    <GameControls
                        onSettings={handleSettings}
                        onReset={handleReset}
                        onHome={handleHome}
                    />
                    <Flex className="flex-col flex-grow justify-center gap-6">
                        <Scoreboard scores={scores} />
                        <TurnIndicator currentTurn={currentTurn} />
                        <div className="relative">
                            <GameBoard
                                grid={grid}
                                onCellClick={handleCell}
                                gameInProgress={isGameInProgress}
                                gameSize={essentials.gameSize}
                                currentLetter={currentLetter}
                            />

                            <div className="absolute top-0 left-0">
                                <Lines
                                    listLine={completedLines}
                                    currentTurn={currentTurn}
                                    gameSize={essentials.gameSize}
                                />
                            </div>
                        </div>
                        <Flex className="justify-between">
                            <Switch
                                options={[Letter.S, Letter.O]}
                                onOptionChange={handleLetterChange}
                            />
                            <ReplayButton
                                handleReplay={handleReplay}
                                isUIDisabled={isUIDisabled}
                            />
                        </Flex>
                    </Flex>
                </Flex>
            </Layout>
        </>
    );
}
