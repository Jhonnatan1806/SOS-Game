# Class: Board

[models/Board](../wiki/models.Board).Board

Representa un tablero de juego.

## Table of contents

### Constructors

- [constructor](../wiki/models.Board.Board#constructor)

### Properties

- [columns](../wiki/models.Board.Board#columns)
- [grid](../wiki/models.Board.Board#grid)
- [rows](../wiki/models.Board.Board#rows)

### Methods

- [getCell](../wiki/models.Board.Board#getcell)
- [getColumns](../wiki/models.Board.Board#getcolumns)
- [getGrid](../wiki/models.Board.Board#getgrid)
- [getRows](../wiki/models.Board.Board#getrows)
- [isEmpty](../wiki/models.Board.Board#isempty)
- [isFull](../wiki/models.Board.Board#isfull)
- [reset](../wiki/models.Board.Board#reset)
- [setCell](../wiki/models.Board.Board#setcell)

## Constructors

### constructor

• **new Board**(`rows?`, `columns?`)

Crear un tablero de juego.
   *

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `rows` | `number` | `3` | Número de filas del tablero (opcional). |
| `columns` | `number` | `3` | Número de columnas del tablero (opcional). |

#### Defined in

[models/Board.ts:15](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Board.ts#L15)

## Properties

### columns

• `Private` `Readonly` **columns**: `number`

#### Defined in

[models/Board.ts:6](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Board.ts#L6)

___

### grid

• `Private` `Readonly` **grid**: `string`[][]

#### Defined in

[models/Board.ts:7](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Board.ts#L7)

___

### rows

• `Private` `Readonly` **rows**: `number`

#### Defined in

[models/Board.ts:5](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Board.ts#L5)

## Methods

### getCell

▸ **getCell**(`row`, `column`): `string`

Obtiene el valor de una celda del tablero.
   *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | Posición de la fila. |
| `column` | `number` | Posición de la columna. |

#### Returns

`string`

Valor de la celda.

#### Defined in

[models/Board.ts:87](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Board.ts#L87)

___

### getColumns

▸ **getColumns**(): `number`

Retorna el número de columnas del tablero.
   *

#### Returns

`number`

Número de columnas del tablero.

#### Defined in

[models/Board.ts:38](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Board.ts#L38)

___

### getGrid

▸ **getGrid**(): `string`[][]

Retorna el tablero de juego.
   *

#### Returns

`string`[][]

Tablero de juego.

#### Defined in

[models/Board.ts:47](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Board.ts#L47)

___

### getRows

▸ **getRows**(): `number`

Retorna el número de filas del tablero.
   *

#### Returns

`number`

Número de filas del tablero.

#### Defined in

[models/Board.ts:29](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Board.ts#L29)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Retorna `true` si el tablero está vacío.

#### Returns

`boolean`

`true` si el tablero está vacío, `false` en caso contrario.

#### Defined in

[models/Board.ts:56](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Board.ts#L56)

___

### isFull

▸ **isFull**(): `boolean`

Retorna `true` si el tablero está lleno.

#### Returns

`boolean`

`true` si el tablero está lleno, `false` en caso contrario.

#### Defined in

[models/Board.ts:65](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Board.ts#L65)

___

### reset

▸ **reset**(): `void`

Limpia el tablero.

#### Returns

`void`

#### Defined in

[models/Board.ts:94](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Board.ts#L94)

___

### setCell

▸ **setCell**(`row`, `column`, `value`): `void`

Establece el valor de una celda del tablero.
   *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | Posición de la fila. |
| `column` | `number` | Posición de la columna. |
| `value` | `string` | Valor a asignar. |

#### Returns

`void`

#### Defined in

[models/Board.ts:76](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Board.ts#L76)
