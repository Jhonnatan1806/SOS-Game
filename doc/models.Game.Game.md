# Class: Game

[models/Game](../wiki/models.Game).Game

Representa un juego de SOS.

## Table of contents

### Constructors

- [constructor](../wiki/models.Game.Game#constructor)

### Properties

- [board](../wiki/models.Game.Game#board)
- [difficulty](../wiki/models.Game.Game#difficulty)
- [gameType](../wiki/models.Game.Game#gametype)
- [players](../wiki/models.Game.Game#players)

### Methods

- [getBoard](../wiki/models.Game.Game#getboard)
- [getDifficulty](../wiki/models.Game.Game#getdifficulty)
- [getGameMode](../wiki/models.Game.Game#getgamemode)
- [getPlayers](../wiki/models.Game.Game#getplayers)

## Constructors

### constructor

• **new Game**(`size`, `type`, `mode`, `difficulty`)

Crea un juego de SOS.

   *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | El tamaño del tablero. * |
| `type` | `string` | El tipo de juego. * |
| `mode` | `string` | El modo de juego. * |
| `difficulty` | `string` | La dificultad del juego. |

#### Defined in

[models/Game.ts:21](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Game.ts#L21)

## Properties

### board

• `Private` **board**: [`Board`](../wiki/models.Board.Board)

#### Defined in

[models/Game.ts:8](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Game.ts#L8)

___

### difficulty

• `Private` **difficulty**: [`Difficulty`](../wiki/constants.Difficulty.Difficulty)

#### Defined in

[models/Game.ts:10](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Game.ts#L10)

___

### gameType

• `Private` **gameType**: [`GameType`](../wiki/constants.GameType.GameType)

#### Defined in

[models/Game.ts:11](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Game.ts#L11)

___

### players

• `Private` **players**: [`Player`](../wiki/models.Player.Player)[]

#### Defined in

[models/Game.ts:9](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Game.ts#L9)

## Methods

### getBoard

▸ **getBoard**(): [`Board`](../wiki/models.Board.Board)

Retorna el tablero del juego.

#### Returns

[`Board`](../wiki/models.Board.Board)

El objeto que representa el tablero del juego.

#### Defined in

[models/Game.ts:53](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Game.ts#L53)

___

### getDifficulty

▸ **getDifficulty**(): [`Difficulty`](../wiki/constants.Difficulty.Difficulty)

Retorna la dificultad del juego.

#### Returns

[`Difficulty`](../wiki/constants.Difficulty.Difficulty)

La dificultad del juego.

#### Defined in

[models/Game.ts:80](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Game.ts#L80)

___

### getGameMode

▸ **getGameMode**(): [`GameType`](../wiki/constants.GameType.GameType)

Retorna el modo del juego.

#### Returns

[`GameType`](../wiki/constants.GameType.GameType)

El modo del juego.

#### Defined in

[models/Game.ts:62](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Game.ts#L62)

___

### getPlayers

▸ **getPlayers**(): [`Player`](../wiki/models.Player.Player)[]

Retorna los jugadores del juego.
   *

#### Returns

[`Player`](../wiki/models.Player.Player)[]

Un arreglo con los jugadores del juego.

#### Defined in

[models/Game.ts:71](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Game.ts#L71)
