# Class: Record

[models/Record](../wiki/models.Record).Record

Representa un registro de movimientos.

## Table of contents

### Constructors

- [constructor](../wiki/models.Record.Record#constructor)

### Properties

- [movements](../wiki/models.Record.Record#movements)

### Methods

- [addMovement](../wiki/models.Record.Record#addmovement)
- [getMovements](../wiki/models.Record.Record#getmovements)
- [reset](../wiki/models.Record.Record#reset)

## Constructors

### constructor

• **new Record**()

Crea una instancia de la clase Record.

#### Defined in

[models/Record.ts:14](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Record.ts#L14)

## Properties

### movements

• `Private` **movements**: [`Movement`](../wiki/interfaces.Movement.Movement)[]

#### Defined in

[models/Record.ts:9](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Record.ts#L9)

## Methods

### addMovement

▸ **addMovement**(`row`, `column`, `letter`): `void`

Agrega un movimiento al registro.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `row` | `number` | La fila del movimiento. |
| `column` | `number` | La columna del movimiento. |
| `letter` | [`Letter`](../wiki/constants.Letter.Letter) | La letra del movimiento. |

#### Returns

`void`

#### Defined in

[models/Record.ts:34](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Record.ts#L34)

___

### getMovements

▸ **getMovements**(): [`Movement`](../wiki/interfaces.Movement.Movement)[]

Obtiene los movimientos del registro.

#### Returns

[`Movement`](../wiki/interfaces.Movement.Movement)[]

Los movimientos del registro.

#### Defined in

[models/Record.ts:23](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Record.ts#L23)

___

### reset

▸ **reset**(): `void`

Reinicia el registro.

#### Returns

`void`

#### Defined in

[models/Record.ts:41](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Record.ts#L41)
