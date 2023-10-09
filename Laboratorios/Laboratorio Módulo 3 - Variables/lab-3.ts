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
