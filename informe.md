# Informe Sprint 5

Nombre: **Jhonnatan Antonio Espinoza Rojas**

Fecha: **14/06/2023**

## 1. Demostración :space_invader:

<table>
    <tr>
        <th>n</th>
        <th>Features</th>
        <th>Estado</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Se graba un juego simple completo de dos jugadores humanos.</td>
        <td>&#10004; Completado</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Se graba un juego general completo de dos jugadores humanos.</td>
        <td>&#10004; Completado</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Se graba un juego simple completo de jugadores humano-computadora.</td>
        <td>&#10004; Completado</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Se graba un juego general completo de jugadores humano-computadora.</td>
        <td>&#10004; Completado</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Se graba un juego simple completo de jugadores computadora-computadora.</td>
        <td>&#10004; Completado</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Se graba un juego general completo de jugadores computadora-computadora.</td>
        <td>&#10004; Completado</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Se realiza el uso de la función Record/Replay</td>
        <td>&#10004; Completado</td>
    </tr>
</table>

### Diagrama de clases

![Diagrama de clases](https://raw.githubusercontent.com/Jhonnatan1806/SOSGame/main/public/images/diagram.png)

## 2. Historias de usuario :bust_in_silhouette:

### Historia de usuario

Como **Jugador** quiero **grabar/reproducir una partida** tal que **pueda ver mis movimientos una vez terminado el juego.**

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

## 3. Revisión de código :pencil:

Clase revisada: **GameController.ts**

Fecha/hora de duración del ejercicio de revisión del código: **12/06/2023 10:00 - 12:00**

<table>
    <tr>
        <th>Checklist</th>
        <th>Items Checklist</th>
        <th colspan="2">Conclusiones</th>
    </tr>
    <tr>
        <td rowspan="5">Estandares de codificación.</td>
        <td>Convenciones de nombres</td>
        <td colspan="2">Las clases siguen la convención de nombres PascalCase, los métodos siguen la conveción de nombres camelCase.</td>
    </tr>
    <tr>
        <td>Convención de ordenación de argumentos de método</td>
        <td colspan="2"> Se sigue la ordenación adecuada en la que los metodos getter y setter van despues del constructor y al final se crean los métodos propios de las clases.</td>
    </tr>
    <tr>
        <td>Comentarios significativos y válidos.</td>
        <td colspan="2"> Se proporciona comentarios de documentación para describir la funcionalidad y el propósito de los métodos y variables. Los comentarios son significativos y ayudan a comprender el código.</td>
    </tr>
    <tr>
        <td>Estilo consistente de bloques de código.</td>
        <td colspan="2">Gracias a prettier podemos mantener un estilo consistente en cada bloque de código definiendo previamente las convenciones que usamos en el lenguaje.</td>
    </tr>
    <tr>
        <td>Indentación consistente.</td>
        <td colspan="2">De igual forma con la ayuda de la herramienta prettier podemos lograr mantener una identación consistente atraves de todo el codigo ( 1 Tab = 4 espacios )</td>
    </tr>
    <tr>
        <td rowspan="6">Principio de diseño.</td>
        <td>Clase o método no bien modularizado.</td>
        <td colspan="2">Existe una buena modularización en la clase.</td>
    </tr>
    <tr>
        <td>Visibilidad adecuada de cada variable, método y clase.</td>
        <td colspan="2">Las variables se definen como private, lo que limita su acceso solo dentro de la clase. Los métodos importantes, como getGame(), getCurrentPlayer(), getGameState(), etc., se definen como public para permitir su acceso desde otras partes del programa.</td>
    </tr>
    <tr>
        <td>Clase o método con pobre abstracción.</td>
        <td colspan="2">El método con una pobre abstraccion en la clase gameController es el método de checkSOS</td>
    </tr>
    <tr>
        <td>Diseño por contrato (pre/postcondiciones).</td>
        <td colspan="2">No se muestra explícitamente un diseño por contrato utilizando precondiciones y postcondiciones en los métodos. Solo el metodo checkSOS y makeMove muestran un intento de diseño por contrato</td>
    </tr>
    <tr>
        <td>Violación del Principio Abierto-Cerrado.</td>
        <td colspan="2"> La clase GameController esta diseñada para ser extensible, ya que permite agregar nuevas funcionalidades y comportamientos sin modificar la propia clase.</td>
    </tr>
    <tr>
        <td>Violación del Principio de Responsabilidad Única.</td>
        <td colspan="2">Cumple con la responsabilidad unica de controlar el juego pero considero que algunos metodos como checkSOS podrian salir de la clase ya que es una responsabilidad de verificar el tablero</td>
    </tr>
    <tr>
        <td rowspan="9">Smells código.</td>
        <td>Números mágicos.</td>
        <td colspan="2">Si, el código tiene números magicos, para ser especifico el currentPlayerIndex se inicializa con un 0, una solución factible seria el uso de constantes, luego de eso si se utilizan constantes para las demas varibales.</td>
    </tr>
    <tr>
        <td>Variable global /clase innecesaria.</td>
        <td colspan="2">No se utilizan variables globables, debido a que en js y ts se utiliza var, let y const para variables, pero se recomienda no usar var para variables debido a que var se utiliza para declarar variables globales, respetando esa pauta no se ah usado var para declarar variables globales solo let y const </td>
    </tr>
    <tr>
        <td>Código duplicado.</td>
        <td colspan="2">No existe código duplicado en la clase GameController, por suerte se ah tenido en consideración desde un principio para evitar la refactorización constante por este problema</td>
    </tr>
    <tr>
        <td>Métodos largos.</td>
        <td colspan="2">Si existe un método largo en esta clase el metodo es el checkSOS, como ya mencione antes lo mejor seria extraer exta clase y llamarla en el makeMove</td>
    </tr>
    <tr>
        <td>Larga lista de parámetros.</td>
        <td colspan="2">No se encontraron listas largas de parametros en los metodos ni en el constructor de la clase</td>
    </tr>
    <tr>
        <td>Expresión demasiado compleja.</td>
        <td colspan="2">No se utilizaron expresiones complejas, conla intencion que sea facil de entender para las personas que quisieran tomar como referencia el código para sus proyectos</td>
    </tr>
    <tr>
        <td>Switch o if-then-else que necesita ser reemplazado con polimorfismo.</td>
        <td colspan="2">Si en el checkSOS hay 2 if-else que podrian ser remplazados usando el polimorfismo</td>
    </tr>
    <tr>
        <td>Nombre de método o variable cuya intención no está clara.</td>
        <td colspan="2">Considero que checkSOS no esta bien declarada ya que no especifica si verifica el SOS o los puntos o si el juego ah terminado, tampoco considero que la clase reset este bien definida creo que mas claro seria llamarla resetGame especificando que lo que va a reiniciar es el juego completo.</td>
    </tr>
    <tr>
        <td>¿Algún método similar en otras clases?</td>
        <td colspan="2">Si el metodo reset en Record y en GameController ademas de algunos getters para que sean accedidos directamente desde el gameController</td>
    </tr>
    <tr>
        <td rowspan="2">Errores.</td>
        <td>Fragmento de código con errores.</td>
        <td>¿Cuál es el error?</td>
        <td>¿Por qué es un error?</td>
    </tr>
    <tr>
        <td>No se encontraron errores en la clase.</td>
        <td> - </td>
        <td> - </td>
    </tr>
</table>

## 4. Resumen de todo el código :page_facing_up:

<table>
    <tr>
        <th>Modulos</th>
        <th>Tipos</th>
        <th>Nombre del archivo de código fuente</th>
        <th>Código de producción o prueba?</th>
        <th># lineas de código</th>
    </tr>
    <tr>
    </tr>
    <tr>
        <td rowspan="19"> Lógica de negocio </td>
        <td rowspan="1">Controllers</td>
        <td>GameController.ts</td>
        <td>Producción</td>
        <td>208</td>
    </tr>
    <tr>
        <td rowspan="5">Models</td>
        <td>Board.ts</td>
        <td>Producción</td>
        <td>103</td>
    </tr>
    <tr>
        <td>Game.ts</td>
        <td>Producción</td>
        <td>77</td>
    </tr>
    <tr>
        <td>Player.ts</td>
        <td>Producción</td>
        <td>50</td>
    </tr>
    <tr>
        <td>Record.ts</td>
        <td>Producción</td>
        <td>44</td>
    </tr>
    <tr>
        <td>Score.ts</td>
        <td>Producción</td>
        <td>49</td>
    </tr>
    <tr>
        <td rowspan="2">Helpers</td>
        <td>Checker.ts</td>
        <td>Producción</td>
        <td>299</td>
    </tr>
    <tr>
        <td>MoveGeneretor.ts</td>
        <td>Producción</td>
        <td>171</td>
    </tr>
    <tr>
        <td rowspan="4">Interfaces</td>
        <td>Essentials.ts</td>
        <td>Producción</td>
        <td>27</td>
    </tr>
    <tr>
        <td>MakeMove.ts</td>
        <td>Producción</td>
        <td>15</td>
    </tr>
    <tr>
        <td>Movement.ts</td>
        <td>Producción</td>
        <td>22</td>
    </tr>
    <tr>
        <td>Winline.ts</td>
        <td>Producción</td>
        <td>32</td>
    </tr>
    <tr>
        <td rowspan="7">Constants</td>
        <td>Difficulty.ts</td>
        <td>Producción</td>
        <td>21</td>
    </tr>
    <tr>
        <td>GameMode.ts</td>
        <td>Producción</td>
        <td>21</td>
    </tr>
    <tr>
        <td>GamePlayers.ts</td>
        <td>Producción</td>
        <td>16</td>
    </tr>
    <tr>
        <td>GameState.ts</td>
        <td>Producción</td>
        <td>16</td>
    </tr>
    <tr>
        <td>GameType.ts</td>
        <td>Producción</td>
        <td>16</td>
    </tr>
    <tr>
        <td>GameWinner.ts</td>
        <td>Producción</td>
        <td>26</td>
    </tr>
    <tr>
        <td>Letter.ts</td>
        <td>Producción</td>
        <td>21</td>
    </tr>
    <tr>
        <td rowspan="11"> Interfaz Grafica </td>
        <td rowspan="1">Utils</td>
        <td>useContextGame.tsx</td>
        <td>Producción</td>
        <td>40</td>
    </tr>
    <tr>
        <td rowspan="3">Pages</td>
        <td>Home/page.tsx</td>
        <td>Producción</td>
        <td>40</td>
    </tr>
    <tr>
        <td>Setting/page.tsx</td>
        <td>Producción</td>
        <td>137</td>
    </tr>
    <tr>
        <td>Game/page.tsx</td>
        <td>Producción</td>
        <td>291</td>
    </tr>
    <tr>
        <td rowspan="7">Components</td>
        <td>GameBoard.tsx</td>
        <td>Producción</td>
        <td>56</td>
    </tr>
    <tr>
        <td>GameControls.tsx</td>
        <td>Producción</td>
        <td>33</td>
    </tr>
    <tr>
        <td>Lines.tsx</td>
        <td>Producción</td>
        <td>57</td>
    </tr>
    <tr>
        <td>ModalWinner.tsx</td>
        <td>Producción</td>
        <td>33</td>
    </tr>
    <tr>
        <td>ReplayButton.tsx</td>
        <td>Producción</td>
        <td>21</td>
    </tr>
    <tr>
        <td>ScoreBoard.tsx</td>
        <td>Producción</td>
        <td>20</td>
    </tr>
    <tr>
        <td>TurnIndicator.tsx</td>
        <td>Producción</td>
        <td>22</td>
    </tr>
    <tr>
        <td rowspan="7"> Pruebas Unitarias </td>
        <td rowspan="7">__Test__</td>
        <td>ComputerPlayingGame.test.ts</td>
        <td>Test</td>
        <td>141</td>
    </tr>
    <tr>
        <td>GeneralGameFinished.test.ts</td>
        <td>Test</td>
        <td>90</td>
    </tr>
    <tr>
        <td>GeneralGameWrite.test.ts</td>
        <td>Test</td>
        <td>28</td>
    </tr>
    <tr>
        <td>PreGame.test.ts</td>
        <td>Test</td>
        <td>34</td>
    </tr>
    <tr>
        <td>RecordGame.test.ts</td>
        <td>Test</td>
        <td>31</td>
    </tr>
    <tr>
        <td>SimpleGameFinished.test.ts</td>
        <td>Test</td>
        <td>66</td>
    </tr>
    <tr>
        <td>SimpleGameWrite.test.ts</td>
        <td>Test</td>
        <td>28</td>
    </tr>
</table>

Total de lineas de código: **2407**

## Lecciones aprendidas de la experiencia de desarrollo del proyecto. :book:

### ¿Qué aprendiste en el proyecto?

Aprendí a utilizar React, TypeScript y Jest. También aprendí a utilizar el patrón de diseño de arquitectura de software MVC (Modelo-Vista-Controlador) y a trabajar con el paradigma de programación orientada a objetos. Además, aprendí a utilizar el sistema de control de versiones Git y la plataforma de desarrollo colaborativo GitHub.

## ¿Qué ganaste personalmente con el proyecto?

Desde mi perspectiva personal, disfruté mucho trabajando en este proyecto. Considero que el juego en sí es extremadamente interesante y me proporcionó una gran cantidad de aprendizaje en el ámbito del desarrollo de software. En cuanto a la codificación, me encontré con varios desafíos de logica, pero gracias a las pruebas unitarias pude identificar y solucionarlos a tiempo, evitando así perder largas horas en la búsqueda de errores. Esto aceleró significativamente mi proceso de desarrollo. En lo que respecta al diseño, pude aprovechar al máximo el uso de componentes y ganchos (hooks), lo que resultó en un código más limpio y fácil de comprender.

A lo largo de los sprints, tuve que refactorizar el código en varias ocasiones, ya que constantemente surgían nuevas funciones o conocimientos que modificaban mi perspectiva sobre cómo abordar la programación. Por ejemplo, me pareció sumamente interesante el uso de Stubs, dado que los movimientos de la computadora debían ser aleatorios. Por lo tanto, sentí la necesidad de implementar esta lógica en mi código, lo que me llevó a realizar cambios significativos en el gameController y el MoveGenerator de mi aplicación.

## ¿Qué hace bien tu proyecto y qué podría hacer mejor tu proyecto?

En mi opinión, considero que la aplicación cumple con los criterios establecidos y funciona correctamente, aunque reconozco que aún contiene algunos errores. No obstante, siento que el código tiene margen de mejora considerable. No logré alcanzar una nivel de abstracción de código muy bueno, lo que me impide considerarlo como un código limpio. Además, el uso de tailwind CSS directamente en las páginas, sin hacer uso de componentes personalizados, tampoco me agrada del todo, ya que dificulta la lectura y comprensión de la lógica de la aplicación.

Un aspecto que debo mejorar es los movimientos generados aleatorariamente en las dificultades medium y hard considero que la implementacion es baja y los movimientos no son los esperados en muchas ocasiones. Por ejemplo, en la dificultad hard, la computadora no siempre elige el movimiento que le permite ganar la partida, sino que en ocasiones elige un movimiento que le permite al jugador ganar la partida. Esto se debe a que la computadora elige un movimiento aleatorio, sin tener en cuenta si el movimiento es ganador o no. Por lo tanto, considero que debo mejorar la lógica de la computadora para que elija un movimiento ganador en lugar de uno aleatorio.

Otro aspecto que me gustaría mejorar es aprovechar al máximo las capacidades de Next.js, dado que, aunque utilicé el framework, no logré utilizar en su totalidad características como getServerSideProps para realizar llamadas al backend. En lugar de eso, opté por renderizar la mayor parte de la lógica desde el cliente, lo cual desde mi punto de vista puede afectar el rendimiento. Debido a limitaciones de tiempo y a mi nivel de experiencia en el desarrollo, siento que no pude aprovechar al máximo las funcionalidades de Next.js en este proyecto.

Sin embargo, considero que adquirí nuevos conocimientos valiosos que me ayudarán a seguir mejorando en el desarrollo de aplicaciones. Aunque reconozco las áreas de mejora en este proyecto, estoy emocionado por seguir aprendiendo y aplicando estas lecciones en futuros desarrollos.
