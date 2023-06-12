# Class: MoveGenerator

[helpers/MoveGenerator](../wiki/helpers.MoveGenerator).MoveGenerator

Clase que representa un movimiento de la IA en el tablero.

## Table of contents

### Constructors

- [constructor](../wiki/helpers.MoveGenerator.MoveGenerator#constructor)

### Methods

- [easyMove](../wiki/helpers.MoveGenerator.MoveGenerator#easymove)
- [evaluateMove](../wiki/helpers.MoveGenerator.MoveGenerator#evaluatemove)
- [getMovement](../wiki/helpers.MoveGenerator.MoveGenerator#getmovement)
- [hardMove](../wiki/helpers.MoveGenerator.MoveGenerator#hardmove)
- [mediumMove](../wiki/helpers.MoveGenerator.MoveGenerator#mediummove)

## Constructors

### constructor

• **new MoveGenerator**()

## Methods

### easyMove

▸ `Static` **easyMove**(`board`): [`Movement`](../wiki/interfaces.Movement.Movement)

Movimiento Facil
Genera un movimiento aleatorio.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `board` | [`Board`](../wiki/models.Board.Board) | El tablero del juego. |

#### Returns

[`Movement`](../wiki/interfaces.Movement.Movement)

Un arreglo con la fila, columna y letra del movimiento.

#### Defined in

[helpers/MoveGenerator.ts:34](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/helpers/MoveGenerator.ts#L34)

___

### evaluateMove

▸ `Static` `Private` **evaluateMove**(`board`, `letter`, `row`, `column`): `number`

Evalua un movimiento.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `board` | [`Board`](../wiki/models.Board.Board) | El tablero del juego. |
| `letter` | [`Letter`](../wiki/constants.Letter.Letter) | La letra del jugador. |
| `row` | `number` | La fila del movimiento. |
| `column` | `number` | La columna del movimiento. |

#### Returns

`number`

La evaluacion del movimiento.

#### Defined in

[helpers/MoveGenerator.ts:135](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/helpers/MoveGenerator.ts#L135)

___

### getMovement

▸ `Static` **getMovement**(`board`, `difficulty`): [`Movement`](../wiki/interfaces.Movement.Movement)

Retorna un movimiento de la IA.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `board` | [`Board`](../wiki/models.Board.Board) | El tablero del juego. |
| `difficulty` | [`Difficulty`](../wiki/constants.Difficulty.Difficulty) | La dificultad del juego. |

#### Returns

[`Movement`](../wiki/interfaces.Movement.Movement)

- Un arreglo con la fila, columna y letra del movimiento.

#### Defined in

[helpers/MoveGenerator.ts:17](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/helpers/MoveGenerator.ts#L17)

___

### hardMove

▸ `Static` **hardMove**(`board`): [`Movement`](../wiki/interfaces.Movement.Movement)

Movimiento Dificil
Genera un movimiento mas sofisticado.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `board` | [`Board`](../wiki/models.Board.Board) | El tablero del juego. |

#### Returns

[`Movement`](../wiki/interfaces.Movement.Movement)

Un arreglo con la fila, columna y letra del movimiento.

#### Defined in

[helpers/MoveGenerator.ts:87](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/helpers/MoveGenerator.ts#L87)

___

### mediumMove

▸ `Static` **mediumMove**(`board`): [`Movement`](../wiki/interfaces.Movement.Movement)

Movimiento Medio
Genera un movimiento mas sofisticado.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `board` | [`Board`](../wiki/models.Board.Board) | El tablero del juego. |

#### Returns

[`Movement`](../wiki/interfaces.Movement.Movement)

Un arreglo con la fila, columna y letra del movimiento.

#### Defined in

[helpers/MoveGenerator.ts:51](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/helpers/MoveGenerator.ts#L51)
