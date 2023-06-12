"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGameContext } from "@/utils/useContextGame";

// componentes core
import { Layout, Modal, Switch} from "@/components/core";

// componentes custom
import { Lines, TurnIndicator, ReplayButton, Scoreboard, ModalWinner, GameControls, GameBoard } from "@/components/custom";

// logica
import { Difficulty, GameMode, GamePlayers, GameState, GameType, GameWinner, Letter } from "@/classes/constants";
import { Essentials, Movement, WinLine } from "@/classes/interfaces";
import { GameController } from "@/classes/controllers";
import { Game } from "@/classes/models";

export default function GamePlay() {
    const gameContext = useGameContext();
    const router = useRouter();

    const [gameController, setGameController] = useState<GameController>();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentLetter, setCurrentLetter] = useState<Letter>(Letter.S);
    const [completedLines, setCompletedLines] = useState<WinLine[]>([]);
    const [isUIDisabled, setIsUIDisabled] = useState<boolean>(false);
    const [isGameInProgress, setIsGameInProgress] = useState<boolean>(false);

    const [essentials] = useState<Essentials>({
        gameSize: gameContext?.gameSize ?? 3,
        gameType: gameContext?.gameType ?? GameType.SIMPLE_GAME,
        gameMode: gameContext?.gameMode ?? GameMode.PVP,
        gameDifficulty: gameContext?.gameDifficulty ?? Difficulty.EASY,
    });

    const [grid, setGrid] = useState<string[][]>([[]]);
    const [winner, setWinner] = useState<GameWinner>(GameWinner.NONE);
    const [currentTurn, setCurrentTurn] = useState<GamePlayers>(
        GamePlayers.PLAYER_ONE
    );
    const [scores, setScores] = useState<number[]>([0, 0]);

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

    const handleCloseModal = (): void => {
        setIsModalOpen(false);
    };

    const handleSettings = (): void => {
        router.push("/settings");
    };

    const handleHome = (): void => {
        router.push("/");
    };

    const handleReset = (): void => {
        gameController?.resetGame();
        updateVariables();
        setCompletedLines([]);
        setIsModalOpen(false);
        setIsUIDisabled(true);
    };

    const handleReplay = async (): Promise<void> => {
        if (!gameController) {
            return;
        }

        const movements = gameController.getRecord().getMovements();
        handleReset();

        const delay = (ms: number): Promise<void> =>
            new Promise((resolve) => setTimeout(resolve, ms));

        for (const movement of movements) {
            await delay(500);
            executeMovement(movement);
        }
    };

    const executeMovement = (movement: Movement): void => {
        writeCell(movement.row, movement.column, movement.letter);
        changeTurn();
        updateVariables();
    };

    const handleLetterChange = (option: string): void => {
        option === "S"
            ? setCurrentLetter(Letter.S)
            : setCurrentLetter(Letter.O);
    };

    const handleCell = (row: number, column: number, letter: Letter): void => {
        setIsGameInProgress(true);

        if (essentials.gameMode === GameMode.CVC) {
            const playComputerTurns = (turnCount: number): void => {
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
        changeTurn();
        updateVariables();
    };

    const handleComputerTurn = async (): Promise<void> => {
        if (!gameController) {
            return;
        }

        const delay = (ms: number): Promise<void> =>
            new Promise((resolve) => setTimeout(resolve, ms));

        await delay(500);
        writeCellBot();
        changeTurn();
        updateVariables();
    };

    const writeCell = (row: number, column: number, letter: Letter): void => {
        if (!gameController || !gameController.makeMove(row, column, letter)) {
            return;
        }
        check(row, column, letter);
    };

    const writeCellBot = (): void => {
        if (!gameController) {
            return;
        }
        const [row, col, letter] = gameController.botMove();
        writeCell(row, col, letter);
    };

    const check = (row: number, column: number, letter: Letter): void => {
        if (!gameController) {
            return;
        }
        gameController.checkSOS(row, column, letter);
        setCompletedLines(gameController.getCompletedSOSLines());
    };

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

    const changeTurn = (): void => {
        if (!gameController || isFinished()) {
            return;
        }
        gameController.changeCurrentPlayer();
    };

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
                <div className="flex flex-col gap-4 text-slate-700 h-screen">
                    <GameControls
                        onSettings={handleSettings}
                        onReset={handleReset}
                        onHome={handleHome}
                    />
                    <div className="flex flex-col flex-grow justify-center gap-6">
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
                                    gameSize={essentials.gameSize}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <Switch
                                options={[Letter.S, Letter.O]}
                                onOptionChange={handleLetterChange}
                            />
                            <ReplayButton
                                handleReplay={handleReplay}
                                isUIDisabled={isUIDisabled}
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
