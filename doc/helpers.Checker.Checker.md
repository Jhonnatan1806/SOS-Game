# Class: Checker

[helpers/Checker](../wiki/helpers.Checker).Checker

Representa un verificador de jugadas.

## Table of contents

### Constructors

- [constructor](../wiki/helpers.Checker.Checker#constructor)

### Methods

- [checkO](../wiki/helpers.Checker.Checker#checko)
- [checkPlay](../wiki/helpers.Checker.Checker#checkplay)
- [checkS](../wiki/helpers.Checker.Checker#checks)

## Constructors

### constructor

• **new Checker**()

## Methods

### checkO

▸ `Static` **checkO**(`board`, `movement`, `player`): [`WinLine`](../wiki/interfaces.WinLine.WinLine)[]

Verifica si un movimiento es una O.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `board` | [`Board`](../wiki/models.Board.Board) | El tablero. |
| `movement` | [`Movement`](../wiki/interfaces.Movement.Movement) | El movimiento. |
| `player` | [`GamePlayers`](../wiki/constants.GamePlayers.GamePlayers) | El jugador. |

#### Returns

[`WinLine`](../wiki/interfaces.WinLine.WinLine)[]

La línea ganadora.

#### Defined in

[helpers/Checker.ts:40](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/helpers/Checker.ts#L40)

___

### checkPlay

▸ `Static` **checkPlay**(`board`, `movement`, `player`): [`WinLine`](../wiki/interfaces.WinLine.WinLine)[]

Verifica si un movimiento es válido.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `board` | [`Board`](../wiki/models.Board.Board) | El tablero. |
| `movement` | [`Movement`](../wiki/interfaces.Movement.Movement) | El movimiento. |
| `player` | [`GamePlayers`](../wiki/constants.GamePlayers.GamePlayers) | El jugador. |

#### Returns

[`WinLine`](../wiki/interfaces.WinLine.WinLine)[]

La línea ganadora.

#### Defined in

[helpers/Checker.ts:17](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/helpers/Checker.ts#L17)

___

### checkS

▸ `Static` **checkS**(`board`, `movement`, `player`): [`WinLine`](../wiki/interfaces.WinLine.WinLine)[]

Verifica si un movimiento es una S.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `board` | [`Board`](../wiki/models.Board.Board) | El tablero. |
| `movement` | [`Movement`](../wiki/interfaces.Movement.Movement) | El movimiento. |
| `player` | [`GamePlayers`](../wiki/constants.GamePlayers.GamePlayers) | El jugador. |

#### Returns

[`WinLine`](../wiki/interfaces.WinLine.WinLine)[]

La línea ganadora.

#### Defined in

[helpers/Checker.ts:142](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/helpers/Checker.ts#L142)
