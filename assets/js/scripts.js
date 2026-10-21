

const colores=["rojo","azul"];                                  // Crea un array con dos colores
colores.push("verde");                                          // Añade "verde" al final del array
console.log(colores);                                           // Muestra ["rojo","azul","verde"]


const animales = ["perro", "gato", "loro"];                     // Crea un array con tres animales
animales.shift();                                               // Elimina el primer elemento ("perro")

animales.unshift("elefante");                                   // Añade "elefante" al principio del array
console.log(animales);                                          // Muestra ["elefante","gato","loro"]

const numeros = [1, 2, 3, 4, 5];                                // Crea un array de números del 1 al 5
numeros.splice(2, 2);                                           // Desde la posición 2 elimina 2 elementos (3 y 4)
console.log(numeros);                                           // Muestra [1, 2, 5]

const palabra="programacion";                                   // Guarda la palabra "programacion"
const posicion=palabra.indexOf("m");                            // Busca la posición de la primera "m"
console.log(posicion);                                          // Muestra 6

const esternocleidomastoideo="esternocleidomastoideo";          // Guarda una palabra larga
const letras=esternocleidomastoideo.length;                     // Obtiene el número de letras
console.log(letras);                                            // Muestra 22

const saludo="Hola Mundo";                                      // Guarda el texto "Hola Mundo"
const saludo2=saludo.replace("Mundo","Clase");                  // Reemplaza "Mundo" por "Clase"
console.log(saludo2);                                           // Muestra "Hola Clase"

const murcielago="Murciélago";                                  // Guarda la palabra "Murciélago"
const murcielago2=murcielago.slice(3,8);                        // Extrae los caracteres de la posición 3 a la 7
console.log(murcielago2);                                       // Muestra "ciéla"

const frase="Aprender JS es genial";                            // Guarda una frase
const fraseNueva=frase.split(" ");                              // Divide la frase en un array usando los espacios
console.log(fraseNueva);                                        // Muestra ["Aprender","JS","es","genial"]

const nombre = "Ana";                                           // Guarda el nombre
const edad = 25;                                                // Guarda la edad
const presentacion=`Hola, me llamo ${nombre} y tengo ${edad} años`; // Crea un texto con template literals
console.log(presentacion);                                      // Muestra la presentación completa

const tituloNuevo=document.createElement("h1");                 // Crea un elemento <h1> nuevo
tituloNuevo.textContent="Mi primer DOM"                         // Le asigna el texto al título
document.body.appendChild(tituloNuevo);                         // Añade el título al final del <body>

const eco=document.getElementById("eco");                       // Selecciona el botón con id "eco"
const parrafoEco=document.getElementById("parrafoEco");         // Selecciona el párrafo con id "parrafoEco"
const inputTexto=document.getElementById("inputTexto");         // Selecciona el input con id "inputTexto"
eco.addEventListener("click",()=>{                              // Escucha el clic en el botón
   parrafoEco.textContent=inputTexto.value;                     // Copia el texto del input al párrafo
});                                                             // Cierra la función del evento


for (let i =1;  i <= 5; i++) {                                  // Bucle que va de 1 a 5
   console.log(i);                                              // Muestra el valor de i en cada vuelta
}                                                               // Fin del bucle for

let numero=5;                                                   // Variable que empieza en 5
while (numero >=1){                                             // Repite mientras numero sea mayor o igual a 1
    console.log(numero);                                        // Muestra el valor actual de numero
    numero--;                                                   // Resta 1 a numero
}                                                               // Fin del bucle while
