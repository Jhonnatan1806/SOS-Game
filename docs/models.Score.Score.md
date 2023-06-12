# Class: Score

[models/Score](../wiki/models.Score).Score

Se encarga de manejar el puntaje del juego.

## Table of contents

### Constructors

- [constructor](../wiki/models.Score.Score#constructor)

### Properties

- [points](../wiki/models.Score.Score#points)

### Methods

- [addPoints](../wiki/models.Score.Score#addpoints)
- [getPoints](../wiki/models.Score.Score#getpoints)
- [reset](../wiki/models.Score.Score#reset)
- [setPoints](../wiki/models.Score.Score#setpoints)

## Constructors

### constructor

• **new Score**(`points?`)

Crea una instancia de la clase Score.
   *

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `points` | `number` | `0` | Los puntos iniciales. |

#### Defined in

[models/Score.ts:11](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Score.ts#L11)

## Properties

### points

• `Private` **points**: `number`

#### Defined in

[models/Score.ts:5](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Score.ts#L5)

## Methods

### addPoints

▸ **addPoints**(`points`): `void`

Añade puntos al puntaje actual.
   *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `points` | `number` | Los puntos a añadir. |

#### Returns

`void`

#### Defined in

[models/Score.ts:20](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Score.ts#L20)

___

### getPoints

▸ **getPoints**(): `number`

Obtiene el puntaje actual.
   *

#### Returns

`number`

El puntaje actual.

#### Defined in

[models/Score.ts:38](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Score.ts#L38)

___

### reset

▸ **reset**(): `void`

Reinicia el puntaje.

#### Returns

`void`

#### Defined in

[models/Score.ts:45](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Score.ts#L45)

___

### setPoints

▸ **setPoints**(`points`): `void`

Establece el puntaje actual.
   *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `points` | `number` | El puntaje a establecer. |

#### Returns

`void`

#### Defined in

[models/Score.ts:29](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Score.ts#L29)
