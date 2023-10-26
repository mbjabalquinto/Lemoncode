import "./style.css";

let producto1 = 50;  // let y const sirven para declarar variables. La diferencia es que const no permite modificar su valor a posteriori.
let producto2 = 20;
let iva = 1.21;
let descuento = 0.9;

console.log((producto1 + producto2) * iva * descuento);  // comentarios

const aguacate = "🥑 aguacate"
const ensalada = "🥗 ensalada"

const nombre = "Marcos"
const apellido = "Jabalquinto"
const edad = "41"

console.log(`%cHola me llamo ${nombre} ${apellido} y tengo ${edad} años.`, `color: white; font-size: 20px; font-style: italic`);

const stilotitulo = "color: red; font-size: 20px; font-style: italic;";
const estilo2 = "color: white; font-style: italic; font-size: 16px";

console.log("%cProbando estilos.", stilotitulo)

console.log(`%c${ensalada} de ${aguacate}`, estilo2)

let name: any = null;

name = 23;

console.log(name);

// INTERFACE
interface Cliente {
    nombre: string;
    edad: number;
}


const clienteA: Cliente = {   // Declaro una variable llamada clienteA y le asigno el tipo Cliente.
    nombre: "Pepe",
    edad: 41,
}

const clienteB: Cliente = {
    nombre: "Manolo",
    edad: 39,
}

clienteA.edad = 24;
clienteB.edad = 34;

const pop = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hard = "🤘 Hard Rock";
const clasica = "🎼 Clásica";
const estilo = "font-size: 15px; font-weight: bold; background-color: green";

interface Grupo{
    nombre: string;
    año: number;
    activo: boolean;
    genero: string;
}

const grupoA: Grupo = {
    nombre: "The Beatles",
    año: 1960,
    activo: true,
    genero: pop
}

const grupoB: Grupo = {
    nombre: "Queen",
    año: 1970,
    activo: false,
    genero: rock
}

const grupoC: Grupo = {
    nombre: "AC DC",
    año: 1973,
    activo: true,
    genero: hard
}

const grupoD: Grupo = {
    nombre: "Ludwig Van Beethoven",
    año: 1770,
    activo: false,
    genero: clasica
}

const grupoE: Grupo = {
    nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    genero: rock
}


console.log(`Nombre: %c${grupoA.nombre}%c / Año: ${grupoA.año} / Activo: ${grupoA.activo} / Género: ${grupoA.genero}`, estilo, '')
console.log(`Nombre: %c${grupoB.nombre}%c / Año: ${grupoB.año} / Activo: ${grupoB.activo} / Género: ${grupoB.genero}`, estilo, '')
console.log(`Nombre: %c${grupoC.nombre}%c / Año: ${grupoC.año} / Activo: ${grupoC.activo} / Género: ${grupoC.genero}`, estilo, '')
console.log(`Nombre: %c${grupoD.nombre}%c / Año: ${grupoD.año} / Activo: ${grupoD.activo} / Género: ${grupoD.genero}`, estilo, '')
console.log(`Nombre: %c${grupoE.nombre}%c / Año: ${grupoE.año} / Activo: ${grupoE.activo} / Género: ${grupoE.genero}`, estilo, '')

