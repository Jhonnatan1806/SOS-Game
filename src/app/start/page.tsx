"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

//core
import Layout from "@/components/core/Layout";
import Flex from "@/components/core/Flex";
import Switch from "@/components/core/Switch";
import Modal from "@/components/core/Modal";

//context
import { useGameContext } from "@/hooks/useContextGame";
import { FaCog, FaHome, FaRedo } from "react-icons/fa";

//controllers
import { GameController } from "@/classes/controllers/GameController";

//classes
import { Game } from "@/classes/models/Game";
import { Letter } from "@/classes/enums/Letter";
import { GameState } from "@/classes/enums/GameState";
import { GameWinner } from "@/classes/enums/GameWinner";
import { Line } from "@/classes/models/Line";
import { GameMode } from "@/classes/enums/GameMode";

export default function GamePlay() {
    const gameContext = useGameContext();
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [disabledButton, setDisabledButton] = useState<boolean>(true);
    const [demo, setDemo] = useState<boolean>(false);
    const [letter, setLetter] = useState<Letter>(Letter.S);
    const [gameGrid, setGameGrid] = useState<string[][]>([[]]);
    const [gameSize, setGameSize] = useState<number>(3);
    const [gameController, setGameController] = useState<GameController>();
    const [gameState, setGameState] = useState<GameState>(GameState.PLAYING);
    const [listLines, setListLine] = useState<Line[]>([]);
    const [recordPlay, setRecordPlay] = useState<boolean>(false);
    const gridColumns = {
        gridTemplateColumns: `repeat(${gameSize}, minmax(0, 1fr))`,
    };
    const sizeCell = {
        width: `${390 / gameSize}px`,
        height: `${390 / gameSize}px`,
    };

    useEffect(() => {
        const game = new Game(
            gameContext?.gameSize,
            gameContext?.gameType,
            gameContext?.gameMode,
            gameContext?.gameDifficulty
        );
        if (gameContext?.gameMode === GameMode.CVC) {
            setDemo(true);
        }
        setGameGrid(game.getBoard().getGrid());
        setGameSize(game.getSize());
        setGameController(new GameController(game));
    }, []);

    useEffect(() => {
        if (gameController && gameContext?.gameMode === GameMode.CVC) {
            setTimeout(() => {
                handleDemoCell();
            }, 500);
        }
    }, [gameController]);

    useEffect(() => {
        if (gameState !== GameState.PLAYING) {
            setModalOpen(true);
            setDisabledButton(false);
        }
    }, [gameState]);

    const fillLines = (lines: Line[]): JSX.Element[] => {
        return lines.map((line, index) => {
            const color = currentTurn === "ROJO" ? "bg-red-500" : "bg-blue-500";
            const angleLine = angle(line);
            const sizeBox = 390 / gameSize;
            const widthLine =
                angleLine === 45 || angleLine === 135
                    ? 2.8 * sizeBox
                    : 2 * sizeBox;
            const heightLine = 4;
            const leftOffset = 2;
            const topOffset = 2;
            const styleLine = {
                width: `${widthLine}px`,
                height: `${heightLine}px`,
                transform: `rotate(${angleLine}deg)`,
                transformOrigin: "0% 0%",
                top: `${line.startRow * sizeBox + sizeBox / 2 + topOffset}px`,
                left: `${
                    line.startColumn * sizeBox + sizeBox / 2 + leftOffset
                }px`,
            };

            return (
                <div
                    key={index}
                    className={`absolute ${color}`}
                    style={styleLine}></div>
            );
        });
    };

    const angle = (line: Line) => {
        const deltaY = line.endRow - line.startRow;
        const deltaX = line.endColumn - line.startColumn;
        const radians = Math.atan2(deltaY, deltaX);
        const degrees = radians * (180 / Math.PI);
        return degrees;
    };

    const updateGrid = () => {
        const updatedGrid = gameController?.getGame().getBoard().getGrid() ?? [
            [],
        ];
        setGameGrid([...updatedGrid]);
    };

    const updateTurn = () => {
        gameController?.changeCurrentPlayer();
    };

    const completeSOS = (row: number, column: number) => {
        const completedSOS = gameController?.checkSOS(row, column);
        if (completedSOS) {
            const lines = gameController?.getCompletedSOSLines();
            setListLine(lines ?? []);
        }
    };

    const handleDemoCell = () => {
        if (gameController?.getGameState() !== GameState.PLAYING) {
            return;
        }
        const [row, col, letter] = gameController?.botMove() ?? [
            0,
            0,
            Letter.S,
        ];
        setTimeout(() => {
            handleWriteCell(row, col, letter);
        }, 500);
    };

    const handleBotMove = () => {
        if (
            gameContext?.gameMode !== GameMode.PVP &&
            gameController?.getCurrentPlayer().isBot()
        ) {
            const [row, col, letter] = gameController?.botMove();
            setTimeout(() => {
                handleWriteCell(row, col, letter);
            }, 500);
        }
    };

    const handleWriteCell = (row: number, column: number, letter: Letter) => {
        const moveCompleted = gameController?.makeMove(row, column, letter);
        if (!moveCompleted) {
            return;
        }
        updateGrid();
        completeSOS(row, column);
        if (gameController?.getGameState() !== GameState.PLAYING) {
            setGameState(GameState.FINISHED);
            return;
        }
        updateTurn();
        if (recordPlay) {
            return;
        }
        handleBotMove();
    };

    const handleLetterChange = (option: string) => {
        option === "S" ? setLetter(Letter.S) : setLetter(Letter.O);
    };

    const handleGameSettings = () => {
        router.push("/settings");
    };

    const handleHome = () => {
        router.push("/");
    };

    const handleExitGame = () => {
        setModalOpen(false);
        handleHome();
    };

    const handleNewGame = () => {
        gameController?.resetGame();
        setGameState(GameState.PLAYING);
        setListLine([]);
        setDisabledButton(true);
        setModalOpen(false);
        if (gameContext?.gameMode === GameMode.CVC) {
            handleDemoCell();
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handlePlay = () => {
        const record = gameController?.getRecord().getClone() ?? null;
        setRecordPlay(true);
        handleNewGame();
        console.log(record);
        if (record) {
            const movements = record.getMovements();
            for (let i = 0; i < movements.length; i++) {
                const movement = movements[i];
                setTimeout(() => {
                    handleWriteCell(
                        movement.row,
                        movement.column,
                        movement.letter
                    );
                }, i * 500);
            }
            setRecordPlay(false);
        }
    };

    const gameWinner = gameController?.getWinner() ?? GameWinner.NONE;
    const currentTurn = gameController?.getCurrentPlayer().getName() ?? "ROJO";
    const scores = [
        gameController?.getGame().getPlayers()[0].getScore().getPoints(),
        gameController?.getGame().getPlayers()[1].getScore().getPoints(),
    ];

    return (
        <>
            {modalOpen ? (
                <Modal onClose={handleCloseModal}>
                    <Flex className="flex-col items-center gap-4">
                        <p>RESULTADO</p>
                        <p className="font-bold">{gameWinner}</p>
                        <Flex className="gap-4 flex-wrap text-sm md:text-base">
                            <button
                                className="w-fit bg-blue-500 px-6 py-2 rounded font-bold text-white"
                                onClick={handleNewGame}>
                                NUEVO JUEGO
                            </button>
                            <button
                                className="w-fit bg-slate-400 px-6 py-2 rounded font-bold text-white"
                                onClick={handleExitGame}>
                                SALIR
                            </button>
                        </Flex>
                    </Flex>
                </Modal>
            ) : null}
            <Layout>
                <Flex className="flex-col gap-4 text-slate-700 h-screen">
                    <Flex className="flex-row justify-between text-3xl">
                        <button
                            className="flex justify-start gap-2"
                            onClick={handleGameSettings}>
                            <FaCog />
                        </button>
                        <div className="flex gap-4">
                            <button
                                className="flex justify-center disabled:text-slate-400 gap-2"
                                onClick={handleNewGame}
                                disabled={disabledButton}>
                                <FaRedo />
                            </button>
                            <button
                                className="flex justify-end gap-2"
                                onClick={handleHome}>
                                <FaHome />
                            </button>
                        </div>
                    </Flex>
                    <Flex className="flex-col flex-grow justify-center gap-6">
                        <div className="flex flex-row items-center justify-center font-bold text-center gap-4 select-none">
                            <div className="bg-red-500 w-12 h-12 rounded text-4xl text-white">
                                {scores[0]}
                            </div>
                            <p className="text-2xl">:</p>
                            <div className="bg-blue-500 w-12 h-12 rounded text-4xl text-white">
                                {scores[1]}
                            </div>
                        </div>
                        <div
                            className={`${
                                currentTurn === "ROJO"
                                    ? "bg-red-500"
                                    : "bg-blue-500"
                            } px-4 py-2 rounded w-full`}>
                            <p className="w-fit text-2xl text-white">
                                <strong>Turno actual:</strong> {currentTurn}
                            </p>
                        </div>
                        <div className="relative">
                            <div
                                className="grid border border-slate-200"
                                style={gridColumns}>
                                {gameGrid.map((row, rowIndex) =>
                                    row.map((column, columnIndex) => (
                                        <button
                                            onClick={
                                                demo
                                                    ? undefined
                                                    : () =>
                                                        handleWriteCell(
                                                            rowIndex,
                                                            columnIndex,
                                                            letter
                                                        )
                                            }
                                            key={columnIndex}
                                            className={`border border-slate-200 bg-white text-2xl font-bold`}
                                            style={sizeCell}>
                                            {column}
                                        </button>
                                    ))
                                )}
                            </div>
                            <div className="absolute top-0 left-0">
                                {fillLines(listLines)}
                            </div>
                        </div>
                        <Flex className="justify-between">
                            <Switch
                                options={[Letter.S, Letter.O]}
                                onOptionChange={handleLetterChange}
                                disabled={demo}
                            />
                            <button
                                className="bg-blue-500 text-white px-6 py-2 rounded font-bold disabled:bg-slate-400"
                                onClick={handlePlay}
                                disabled={disabledButton}>
                                REPRODUCIR
                            </button>
                        </Flex>
                    </Flex>
                </Flex>
            </Layout>
        </>
    );
}
