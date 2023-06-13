import { GameType, Letter } from "@/classes/constants";
import { GameController } from "@/classes/controllers";
import { Game } from "@/classes/models";

describe("General Game Write", (): void => {
    it("AC 6.1", (): void => {
        const game: Game = new Game(3, GameType.GENERAL_GAME);
        game.getBoard()
            .getGrid()
            .map((row) => row.map((column) => expect(column).toBe("")));
    });

    it("AC 6.2", (): void => {
        const game: Game = new Game(3, GameType.GENERAL_GAME);
        const gameCtrl: GameController = new GameController(game);
        gameCtrl.makeMove(0, 0, Letter.S);
        expect(game.getBoard().getCell(0, 0)).toBe(Letter.S);
    });

    it("AC 6.3", (): void => {
        const game: Game = new Game(3, GameType.GENERAL_GAME);
        const gameCtrl: GameController = new GameController(game);
        gameCtrl.makeMove(0, 0, Letter.S);
        gameCtrl.makeMove(0, 0, Letter.O);
        expect(game.getBoard().getCell(0, 0)).toBe(Letter.S);
    });
});
