# Módulo 3: Seguridad en React

- Explicar el riesgo/vulnerabilidad

React es conocido por sus grandes ventajas a la hora del desarrollo front-end permitiendo agilizar los procesos de desarrollo, pero también, por ser de las librerías más seguras de JavaScript.
Debido a esta seguridad que presenta esta librería, hoy en día, no hay ninguna vulnerabilidad conocida en el núcleo de la misma.
No por ello significa que no hay potenciales riesgos, de hecho, el uso de librerías terceras o la incorrecta (o nula) sanitización de campos de tipo input hace que la aplicación desarrollada sea vulnerable a ataques XSS, rotura de esquemas de autenticación o controles de acceso burlados.

- Mostrar un ejemplo de lo que estaría mal hecho
-> Ejemplo 1

- Mostrar un ejemplo de lo que estaría bien hecho
-> Ejemplo 1

Protección en rutas -> Ejemplo 2

- Librerías de terceros que ayudan en el caso si las hay
-> Ejemplo 1: dompurify

Alternativas:

- [JS-XSS](https://github.com/leizongmin/js-xss)
- [Sanitize-html](https://github.com/apostrophecms/sanitize-html)

Un ejercicio simple a resolver basado en ello
Enunciado 1: Protección contra XSS con una expresión regular

Crea un componente React que permita al usuario introducir un comentario.
El comentario debe ser validado para evitar ataques XSS.
Para ello, utiliza una expresión regular para comprobar que el comentario no contiene código HTML malicioso.
Enunciado 2: Protección contra XSS con la librería DOMPurify

Crea un componente React que permita al usuario introducir un comentario.
El comentario debe ser validado para evitar ataques XSS.
Para ello, utiliza la librería DOMPurify para desinfectar el comentario antes de mostrarlo.
Enunciado 3: Protección contra XSS con la librería JS-XSS

Crea un componente React que permita al usuario introducir un comentario.
El comentario debe ser validado para evitar ataques XSS.
Para ello, utiliza la librería JS-XSS para detectar y eliminar el código HTML malicioso.
Enunciado 4: Control de rutas con React-Router-DOM

Crea una aplicación React con React-Router-DOM.
La aplicación debe tener dos rutas:
Una ruta para la página de inicio.
Una ruta para la página de contacto.
La página de inicio debe mostrar un mensaje de bienvenida.
La página de contacto debe permitir al usuario enviar un mensaje.
Estos enunciados son un buen punto de partida para que tus alumnos aprendan a protegerse contra los ataques XSS.

Aquí tienes algunos consejos adicionales para ayudar a tus alumnos a completar los ejercicios:

Recuerda que los ataques XSS pueden ser muy sofisticados. No basta con utilizar una simple expresión regular para protegerse.
Anima a tus alumnos a investigar otras técnicas de protección contra XSS. Hay muchas librerías y herramientas disponibles que pueden ayudar a mejorar la seguridad de las aplicaciones web.
Pídeles que compartan sus soluciones con el resto de la clase. Esto ayudará a crear una comunidad de aprendizaje y a mejorar el conocimiento de todos.
Espero que estos ejercicios sean útiles para tus alumnos.
