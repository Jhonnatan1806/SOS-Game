# Informe Sprint 5

Nombre: **Jhonnatan Espinoza Rojas**

Fecha: **14/06/2023**

## 1. Demostración

| n | Features| Estado |
|-|-|-|
| 1 | Se graba un juego simple completo de dos jugadores humanos. | :white_check_mark: |
| 2 | Se graba un juego general completo de dos jugadores humanos. | :white_check_mark: |
| 3 | Se graba un juego simple completo de jugadores humano-computadora. | :white_check_mark: |
| 4 | Se graba un juego general completo de jugadores humano-computadora. | :white_check_mark: |
| 5 | Se graba un juego simple completo de jugadores computadora-computadora. | :white_check_mark: |
| 6 | Se graba un juego general completo de jugadores computadora-computadora. | :white_check_mark: |
| 7 | Se graba el uso de la función Record/Replay | :white_check_mark: |


## 2. Historias de usuario

### Historia de usuario

Como **Jugador** quiero **grabar/reproducir una partida** tal que **pueda ver mis movimientos una vez terminado el jeugo.**

Nombre de la historia de usuario: **Grabar/Reproducir partida**
Descripción: **El jugador puede grabar/reproducir su partida una vez terminado el juego.**
Prioridad: **3 (baja)**
Estimación: **2 horas**

### Criterios de aceptación

AC9.1 - El jugador puede grabar/reproducir su partida una vez terminado el juego.

```
Given: El juego ha terminado.
When: El usuario presiona el botón de reproducir.
Then: El sistema muestra los movimientos de la partida.
```

## 3. Revisión de código

| Checklist | Items Checklist | Conclusiones |
|-|-|-|
| Estandares de condificación | Convenciones de nombres |  |
| ^ | Convención de ordenación de argumentos de método |  |
| ^ | Comentarios significativos y válidos. |  |
| ^ | Estilo consistente de bloques de código |  |
| ^ | Indentación consistente |  |
| Principio de diseño | Clase o método no bien modularizado |  |
| ^ | Visibilidad adecuada de cada variable, método y clase. |  |
| ^ | Clase o método con pobre abstracción |  |
| ^ | Diseño por contrato (pre/postcondiciones) |  |
| ^ | Violación del Principio Abierto-Cerrado |  |
| ^ | Violación del Principio de Responsabilidad Única |  |
| Smells código | Números mágicos |  |
| ^ | Variable global /clase innecesaria |  |
| ^ | Código duplicado |  |
| ^ | Métodos largos |  |
| ^ | Larga lista de parámetros |  |
| ^ | Expresión demasiado compleja |  |
| ^ | Switch o if-then-else que necesita ser reemplazado con polimorfismo |  |
| ^ | Nombre de método o variable cuya intención no está clara |  |
| ^ | ¿Algún método similar en otras clases? |  |
| Errores | Fragmento de código con errores | **¿Cuál es el error?** **¿Por qué es un error?** |
| ^ | Fragmento de código que no compila | **¿Cuál es el error?** **¿Por qué es un error?** |

## 4. Resumen de todo el código

| Tipo | Nombre del archivo de código fuente | Código de producción o prueba? | # lineas de código |
|-|-|-|-|
| Controllers | GameController.ts | Producción | 208 |
| Models | Board.ts | Producción | 103 |
| ^ | Game.ts | Producción | 77 |
| ^ | Player.ts | Producción | 50 |
| ^ | Record.ts | Producción | 44 |
| ^ | Score.ts | Producción | 49 |
| Helpers | Checker.ts | Producción | 299 |
| ^ | MoveGeneretor.ts | Producción | 171 |
| Interfaces | Essentials.ts | Producción | 27 |
| ^ | MakeMove.ts | Producción | 15 |
| ^ | Movement.ts | Producción | 22 |
| ^ | WinLine.ts | Producción | 32 |
| Constants | Difficulty.ts | Producción | 21 |
| ^ | GameMode.ts | Producción | 21 |
| ^ | GamePlayers.ts | Producción | 16 |
| ^ | GameState.ts | Producción | 16 |
| ^ | GameType.ts | Producción | 16 |
| ^ | GameWinner.ts | Producción | 26 |
| ^ | Letter.ts | Producción | 21 |
| Utils | useContextGame.tsx | Producción | 45 |
| Pages | Home.tsx | Producción | 40 |
| ^ | Setting.tsx | Producción | 137 |
| ^ | Game.tsx | Producción | 291 |
| Components | GameBoard.tsx | Producción | 56 |
| ^ | GameControls.tsx | Producción | 33 |
| ^ | Lines.tsx | Producción | 57 |
| ^ | ModalWinner.tsx | Producción | 33 |
| ^ | ReplayButton.tsx | Producción | 21 |
| ^ | ScoreBoard.tsx | Producción | 20 |
| ^ | TurnIndicator.tsx | Producción | 22 |
| \_\_Test\_\_ | ComputerPlayingGame.test.ts | Test | 141 |
| ^ | GeneralGameFinished.test.ts | Test | 90 |
| ^ | GeneralGameWrite.test.ts | Test | 28 |
| ^ | PreGame.test.ts | Test | 34 |
| ^ | RecordGame.test.ts | Test | 31 |
| ^ | SimpleGameFinished.test.ts | Test | 66 |
| ^ | SimpleGameWrite.test.ts | Test | 28 |

Total de lineas de código: **2407**

## Resume las lecciones aprendidas:

## ¿Qué ganaste personalmente con el proyecto?

Personalmente, me agrado hacer el proyecto, considero que es un juego muy interesante y que me ayudo a aprender mucho sobre el desarrollo de aplicaciones web. Respecto a la codificación tuve varios problemas con la lógica, pero gracias a las pruebas unitarias pude darme cuenta a tiempo, así evité pasar largas horas en búsqueda de errores, lo que acelero mi proceso de desarrollo, respecto al diseño pude aprovechar en gran medida el uso de componentes y el uso de hooks, lo que me ayudo a tener un código más limpio y fácil de entender. Tuve que refactorizar el código a lo largo de todos los sprints porque siempre surgía alguna función nueva o conocimiento nuevo que cambiaba mi perspectiva de como hacer el código, por ejemplo el uso de Stubs me pareció muy interesante, ya que los movimientos de la computadora eran aleatorios por lo tanto, me vi en la obligación de querer implementarlo en el código lo que ocasiono que refactorize en gran medida gameController y MoveGenerator cambiando la lógica así de mi aplicación. Considero que me ha dado una perspectiva más amplia de lo que implica el desarrollo.

## ¿Qué hace bien tu proyecto y qué podría hacer mejor tu proyecto?

Enrealidad considero que la aplicación cumple con los criterios y funciona, aunque no esta libre de errores sin embargo el código tiene mucho por mejorar, considero que mi abstraccion de código no es lo suficientemente buena para considerarlo como un codigo limpio, el uso de tailwind dentro de las paginas sin usar componentes personalizados tampoco me agrada demasiado ya que hace mas complicado poder leer y entender la logica de mi aplicación, algo muy importante que me gustaria mejorar tambien es que aunque uso nextjs no estoy aprovechando al maximo el uso de esta tecnologia, teniendo la posibilidad de hacer llamadas al backend usando getServerSideProps, decidi agregar la mayoria de la logica renderizandola desde el cliente cosa que terminos de rendimiento no me parece correcta, debido al tiempo y a mi escazo dominio de esta tecnologia creo que no pude sacarle el maximo provecho en el proyecto, sin embaro creo que adquiri nuevos conocimientos que me serviran para seguir mejorando en el desarrollo de aplicaciones.