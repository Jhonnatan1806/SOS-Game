# Class: GameController

[controllers/GameController](../wiki/controllers.GameController).GameController

Controla el juego de SOS.

## Table of contents

### Constructors

- [constructor](../wiki/controllers.GameController.GameController#constructor)

### Properties

- [completedLines](../wiki/controllers.GameController.GameController#completedlines)
- [currentPlayerIndex](../wiki/controllers.GameController.GameController#currentplayerindex)
- [game](../wiki/controllers.GameController.GameController#game)
- [gameState](../wiki/controllers.GameController.GameController#gamestate)
- [gameWinner](../wiki/controllers.GameController.GameController#gamewinner)
- [record](../wiki/controllers.GameController.GameController#record)

### Methods

- [addSOSLine](../wiki/controllers.GameController.GameController#addsosline)
- [botMove](../wiki/controllers.GameController.GameController#botmove)
- [changeCurrentPlayer](../wiki/controllers.GameController.GameController#changecurrentplayer)
- [checkSOS](../wiki/controllers.GameController.GameController#checksos)
- [getCompletedSOSLines](../wiki/controllers.GameController.GameController#getcompletedsoslines)
- [getCurrentPlayer](../wiki/controllers.GameController.GameController#getcurrentplayer)
- [getGame](../wiki/controllers.GameController.GameController#getgame)
- [getGameState](../wiki/controllers.GameController.GameController#getgamestate)
- [getRecord](../wiki/controllers.GameController.GameController#getrecord)
- [getScores](../wiki/controllers.GameController.GameController#getscores)
- [getWinner](../wiki/controllers.GameController.GameController#getwinner)
- [makeMove](../wiki/controllers.GameController.GameController#makemove)
- [resetGame](../wiki/controllers.GameController.GameController#resetgame)

## Constructors

### constructor

• **new GameController**(`game`)

Crea un juego de SOS.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `game` | [`Game`](../wiki/models.Game.Game) | El juego. |

#### Defined in

[controllers/GameController.ts:21](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L21)

## Properties

### completedLines

• `Private` **completedLines**: [`WinLine`](../wiki/interfaces.WinLine.WinLine)[]

#### Defined in

[controllers/GameController.ts:14](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L14)

___

### currentPlayerIndex

• `Private` **currentPlayerIndex**: `number`

#### Defined in

[controllers/GameController.ts:13](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L13)

___

### game

• `Private` **game**: [`Game`](../wiki/models.Game.Game)

#### Defined in

[controllers/GameController.ts:10](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L10)

___

### gameState

• `Private` **gameState**: [`GameState`](../wiki/constants.GameState.GameState)

#### Defined in

[controllers/GameController.ts:11](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L11)

___

### gameWinner

• `Private` **gameWinner**: [`GameWinner`](../wiki/constants.GameWinner.GameWinner)

#### Defined in

[controllers/GameController.ts:12](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L12)

___

### record

• `Private` **record**: [`Record`](../wiki/models.Record.Record)

#### Defined in

[controllers/GameController.ts:15](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L15)

## Methods

### addSOSLine

▸ `Private` **addSOSLine**(`line`): `void`

Agrega una línea de SOS completada durante el juego.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `line` | [`WinLine`](../wiki/interfaces.WinLine.WinLine) | La línea de SOS completada. |

#### Returns

`void`

#### Defined in

[controllers/GameController.ts:99](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L99)

___

### botMove

▸ **botMove**(): [`number`, `number`, [`Letter`](../wiki/constants.Letter.Letter)]

Realiza un movimiento de la Computadora en el tablero
y retorna la fila donde se realizó el movimiento.

#### Returns

[`number`, `number`, [`Letter`](../wiki/constants.Letter.Letter)]

El movimiento del bot.

#### Defined in

[controllers/GameController.ts:150](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L150)

___

### changeCurrentPlayer

▸ **changeCurrentPlayer**(): `void`

Cambia el jugador actual al siguiente jugador en la lista de jugadores.

#### Returns

`void`

#### Defined in

[controllers/GameController.ts:51](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L51)

___

### checkSOS

▸ **checkSOS**(`row`, `column`, `letter`): `boolean`

Verifica si se ha completado una línea de SOS.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | La fila donde se realizó el movimiento. |
| `column` | `number` | La columna donde se realizó el movimiento. |
| `letter` | [`Letter`](../wiki/constants.Letter.Letter) | La letra que se colocó en la posición especificada. |

#### Returns

`boolean`

`true` si se completó una línea de SOS, `false` en caso contrario.

#### Defined in

[controllers/GameController.ts:167](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L167)

___

### getCompletedSOSLines

▸ **getCompletedSOSLines**(): [`WinLine`](../wiki/interfaces.WinLine.WinLine)[]

Retorna la última línea de SOS completada durante el juego.

#### Returns

[`WinLine`](../wiki/interfaces.WinLine.WinLine)[]

La última línea de SOS completada o null si no hay ninguna.

#### Defined in

[controllers/GameController.ts:90](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L90)

___

### getCurrentPlayer

▸ **getCurrentPlayer**(): [`Player`](../wiki/models.Player.Player)

Retorna el jugador actual.

#### Returns

[`Player`](../wiki/models.Player.Player)

El jugador actual.

#### Defined in

[controllers/GameController.ts:44](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L44)

___

### getGame

▸ **getGame**(): [`Game`](../wiki/models.Game.Game)

Retorna el juego.

#### Returns

[`Game`](../wiki/models.Game.Game)

El juego.

#### Defined in

[controllers/GameController.ts:35](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L35)

___

### getGameState

▸ **getGameState**(): [`GameState`](../wiki/constants.GameState.GameState)

Retorna `true` si el juego ha terminado.

#### Returns

[`GameState`](../wiki/constants.GameState.GameState)

`true` si el juego ha terminado, `false` en caso contrario.

#### Defined in

[controllers/GameController.ts:61](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L61)

___

### getRecord

▸ **getRecord**(): [`Record`](../wiki/models.Record.Record)

Retorna los movimientos realizados del tablero.

#### Returns

[`Record`](../wiki/models.Record.Record)

Los movimientos realizados del tablero.

#### Defined in

[controllers/GameController.ts:70](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L70)

___

### getScores

▸ **getScores**(): `number`[]

Retorna los scores de los jugadores.

#### Returns

`number`[]

Los scores de los jugadores.

#### Defined in

[controllers/GameController.ts:79](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L79)

___

### getWinner

▸ **getWinner**(): [`GameWinner`](../wiki/constants.GameWinner.GameWinner)

Retorna el jugador ganador del juego.

#### Returns

[`GameWinner`](../wiki/constants.GameWinner.GameWinner)

El jugador ganador.

#### Defined in

[controllers/GameController.ts:108](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L108)

___

### makeMove

▸ **makeMove**(`row`, `column`, `letter`): `boolean`

Realiza un movimiento en el tablero.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | La fila donde se realizará el movimiento. |
| `column` | `number` | La columna donde se realizará el movimiento. |
| `letter` | [`Letter`](../wiki/constants.Letter.Letter) | La letra que se colocará en la posición especificada. |

#### Returns

`boolean`

`true` si el movimiento se realizó con éxito, `false` en caso contrario.

#### Defined in

[controllers/GameController.ts:131](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L131)

___

### resetGame

▸ **resetGame**(): `void`

Reinicia el juego.

#### Returns

`void`

#### Defined in

[controllers/GameController.ts:200](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/controllers/GameController.ts#L200)
