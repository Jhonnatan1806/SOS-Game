# Class: Player

[models/Player](../wiki/models.Player).Player

Representa un jugador del juego SOS.

## Table of contents

### Constructors

- [constructor](../wiki/models.Player.Player#constructor)

### Properties

- [bot](../wiki/models.Player.Player#bot)
- [name](../wiki/models.Player.Player#name)
- [score](../wiki/models.Player.Player#score)

### Methods

- [getName](../wiki/models.Player.Player#getname)
- [getScore](../wiki/models.Player.Player#getscore)
- [isBot](../wiki/models.Player.Player#isbot)

## Constructors

### constructor

• **new Player**(`name`, `bot?`)

Crea una instancia de la clase Player.
   *

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | [`GamePlayers`](../wiki/constants.GamePlayers.GamePlayers) | `undefined` | El nombre del jugador. * |
| `bot` | `boolean` | `false` | Si el jugador es un bot. |

#### Defined in

[models/Player.ts:18](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Player.ts#L18)

## Properties

### bot

• `Private` `Readonly` **bot**: `boolean`

#### Defined in

[models/Player.ts:10](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Player.ts#L10)

___

### name

• `Private` `Readonly` **name**: [`GamePlayers`](../wiki/constants.GamePlayers.GamePlayers)

#### Defined in

[models/Player.ts:8](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Player.ts#L8)

___

### score

• `Private` `Readonly` **score**: [`Score`](../wiki/models.Score.Score)

#### Defined in

[models/Player.ts:9](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Player.ts#L9)

## Methods

### getName

▸ **getName**(): [`GamePlayers`](../wiki/constants.GamePlayers.GamePlayers)

Obtiene el nombre del jugador.

#### Returns

[`GamePlayers`](../wiki/constants.GamePlayers.GamePlayers)

El nombre del jugador.

#### Defined in

[models/Player.ts:28](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Player.ts#L28)

___

### getScore

▸ **getScore**(): [`Score`](../wiki/models.Score.Score)

Obtiene el puntaje del jugador.

#### Returns

[`Score`](../wiki/models.Score.Score)

El puntaje del jugador.

#### Defined in

[models/Player.ts:37](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Player.ts#L37)

___

### isBot

▸ **isBot**(): `boolean`

Retorna si el jugador es un bot.

#### Returns

`boolean`

Si el jugador es un bot.

#### Defined in

[models/Player.ts:46](https://github.com/Jhonnatan1806/SOSGame/blob/2d7847a/src/classes/models/Player.ts#L46)
