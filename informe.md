# Informe Sprint 5

Nombre: **Jhonnatan Espinoza Rojas**

Fecha: **14/06/2023**

## 1. Demostración

| n   | Features                                                                 | Estado             |
| --- | ------------------------------------------------------------------------ | ------------------ |
| 1   | Se graba un juego simple completo de dos jugadores humanos.              | :white_check_mark: |
| 2   | Se graba un juego general completo de dos jugadores humanos.             | :white_check_mark: |
| 3   | Se graba un juego simple completo de jugadores humano-computadora.       | :white_check_mark: |
| 4   | Se graba un juego general completo de jugadores humano-computadora.      | :white_check_mark: |
| 5   | Se graba un juego simple completo de jugadores computadora-computadora.  | :white_check_mark: |
| 6   | Se graba un juego general completo de jugadores computadora-computadora. | :white_check_mark: |
| 7   | Se graba el uso de la función Record/Replay                              | :white_check_mark: |

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

Clase revisada: **GameController.ts**

Fecha/hora de duración del ejercicio de revisión del código: **12/06/2023 10:00 - 12:00**

| Checklist                   | Items Checklist                                                     | Conclusiones                                     |
| --------------------------- | ------------------------------------------------------------------- | ------------------------------------------------ |
| Estandares de condificación | Convenciones de nombres                                             |                                                  |
| ^                           | Convención de ordenación de argumentos de método                    |                                                  |
| ^                           | Comentarios significativos y válidos.                               |                                                  |
| ^                           | Estilo consistente de bloques de código                             |                                                  |
| ^                           | Indentación consistente                                             |                                                  |
| Principio de diseño         | Clase o método no bien modularizado                                 |                                                  |
| ^                           | Visibilidad adecuada de cada variable, método y clase.              |                                                  |
| ^                           | Clase o método con pobre abstracción                                |                                                  |
| ^                           | Diseño por contrato (pre/postcondiciones)                           |                                                  |
| ^                           | Violación del Principio Abierto-Cerrado                             |                                                  |
| ^                           | Violación del Principio de Responsabilidad Única                    |                                                  |
| Smells código               | Números mágicos                                                     |                                                  |
| ^                           | Variable global /clase innecesaria                                  |                                                  |
| ^                           | Código duplicado                                                    |                                                  |
| ^                           | Métodos largos                                                      |                                                  |
| ^                           | Larga lista de parámetros                                           |                                                  |
| ^                           | Expresión demasiado compleja                                        |                                                  |
| ^                           | Switch o if-then-else que necesita ser reemplazado con polimorfismo |                                                  |
| ^                           | Nombre de método o variable cuya intención no está clara            |                                                  |
| ^                           | ¿Algún método similar en otras clases?                              |                                                  |
| Errores                     | Fragmento de código con errores                                     | **¿Cuál es el error?** **¿Por qué es un error?** |
| ^                           | Fragmento de código que no compila                                  | **¿Cuál es el error?** **¿Por qué es un error?** |

Clase revisada: **MoveGenerator.ts**

Fecha/hora de duración del ejercicio de revisión del código: **14/06/2023 16:00 - 18:00**

<table>
    <tr>
        <th>Checklist</th>
        <td>Items Checklist</td>
        <td>Conclusiones</td>
    </tr>
    <tr>
        <th rowspan="5">Estandares de codificación</th>
        <td>Convenciones de nombres</td>
        <td></td>
    </tr>
    <tr>
        <td>Convención de ordenación de argumentos de método</td>
        <td></td>
    </tr>
    <tr>
        <td>Comentarios significativos y válidos.</td>
        <td></td>
    </tr>
<!-- Resto de las filas -->
</table>


## 4. Resumen de todo el código

| Tipo         | Nombre del archivo de código fuente | Código de producción o prueba? | # lineas de código |
| ------------ | ----------------------------------- | ------------------------------ | ------------------ |
| Controllers  | GameController.ts                   | Producción                     | 208                |
| Models       | Board.ts                            | Producción                     | 103                |
| ^            | Game.ts                             | Producción                     | 77                 |
| ^            | Player.ts                           | Producción                     | 50                 |
| ^            | Record.ts                           | Producción                     | 44                 |
| ^            | Score.ts                            | Producción                     | 49                 |
| Helpers      | Checker.ts                          | Producción                     | 299                |
| ^            | MoveGeneretor.ts                    | Producción                     | 171                |
| Interfaces   | Essentials.ts                       | Producción                     | 27                 |
| ^            | MakeMove.ts                         | Producción                     | 15                 |
| ^            | Movement.ts                         | Producción                     | 22                 |
| ^            | WinLine.ts                          | Producción                     | 32                 |
| Constants    | Difficulty.ts                       | Producción                     | 21                 |
| ^            | GameMode.ts                         | Producción                     | 21                 |
| ^            | GamePlayers.ts                      | Producción                     | 16                 |
| ^            | GameState.ts                        | Producción                     | 16                 |
| ^            | GameType.ts                         | Producción                     | 16                 |
| ^            | GameWinner.ts                       | Producción                     | 26                 |
| ^            | Letter.ts                           | Producción                     | 21                 |
| Utils        | useContextGame.tsx                  | Producción                     | 45                 |
| Pages        | Home.tsx                            | Producción                     | 40                 |
| ^            | Setting.tsx                         | Producción                     | 137                |
| ^            | Game.tsx                            | Producción                     | 291                |
| Components   | GameBoard.tsx                       | Producción                     | 56                 |
| ^            | GameControls.tsx                    | Producción                     | 33                 |
| ^            | Lines.tsx                           | Producción                     | 57                 |
| ^            | ModalWinner.tsx                     | Producción                     | 33                 |
| ^            | ReplayButton.tsx                    | Producción                     | 21                 |
| ^            | ScoreBoard.tsx                      | Producción                     | 20                 |
| ^            | TurnIndicator.tsx                   | Producción                     | 22                 |
| \_\_Test\_\_ | ComputerPlayingGame.test.ts         | Test                           | 141                |
| ^            | GeneralGameFinished.test.ts         | Test                           | 90                 |
| ^            | GeneralGameWrite.test.ts            | Test                           | 28                 |
| ^            | PreGame.test.ts                     | Test                           | 34                 |
| ^            | RecordGame.test.ts                  | Test                           | 31                 |
| ^            | SimpleGameFinished.test.ts          | Test                           | 66                 |
| ^            | SimpleGameWrite.test.ts             | Test                           | 28                 |

Total de lineas de código: **2407**

## Resume las lecciones aprendidas:

## ¿Qué ganaste personalmente con el proyecto?

Desde mi perspectiva personal, disfruté mucho trabajando en este proyecto. Considero que el juego en sí es extremadamente interesante y me proporcionó una gran cantidad de aprendizaje en el ámbito del desarrollo de software. En cuanto a la codificación, me encontré con varios desafíos de logica, pero gracias a las pruebas unitarias pude identificar y solucionarlos a tiempo, evitando así perder largas horas en la búsqueda de errores. Esto aceleró significativamente mi proceso de desarrollo. En lo que respecta al diseño, pude aprovechar al máximo el uso de componentes y ganchos (hooks), lo que resultó en un código más limpio y fácil de comprender.

A lo largo de los sprints, tuve que refactorizar el código en varias ocasiones, ya que constantemente surgían nuevas funciones o conocimientos que modificaban mi perspectiva sobre cómo abordar la programación. Por ejemplo, me pareció sumamente interesante el uso de Stubs, dado que los movimientos de la computadora debían ser aleatorios. Por lo tanto, sentí la necesidad de implementar esta lógica en mi código, lo que me llevó a realizar cambios significativos en el gameController y el MoveGenerator de mi aplicación.

## ¿Qué hace bien tu proyecto y qué podría hacer mejor tu proyecto?

En mi opinión, considero que la aplicación cumple con los criterios establecidos y funciona correctamente, aunque reconozco que aún contiene algunos errores. No obstante, siento que el código tiene margen de mejora considerable. No logré alcanzar una nivel de abstracción de código muy bueno, lo que me impide considerarlo como un código limpio. Además, el uso de tailwind CSS directamente en las páginas, sin hacer uso de componentes personalizados, tampoco me agrada del todo, ya que dificulta la lectura y comprensión de la lógica de la aplicación.

Un aspecto que me gustaría mejorar es aprovechar al máximo las capacidades de Next.js, dado que, aunque utilicé el framework, no logré utilizar en su totalidad características como getServerSideProps para realizar llamadas al backend. En lugar de eso, opté por renderizar la mayor parte de la lógica desde el cliente, lo cual desde mi punto de vista puede afectar el rendimiento. Debido a limitaciones de tiempo y a mi nivel de experiencia en el desarrollo, siento que no pude aprovechar al máximo las funcionalidades de Next.js en este proyecto.

Sin embargo, considero que adquirí nuevos conocimientos valiosos que me ayudarán a seguir mejorando en el desarrollo de aplicaciones. Aunque reconozco las áreas de mejora en este proyecto, estoy emocionado por seguir aprendiendo y aplicando estas lecciones en futuros desarrollos.
