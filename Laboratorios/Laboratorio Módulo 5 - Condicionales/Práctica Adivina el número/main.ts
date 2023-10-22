const generaNumeroAleatorio = () => Math.floor(Math.random() * 100) + 1;
const numero = generaNumeroAleatorio();
let intentos = 5;
console.log(numero);

// FUNCIONES PARA COMPROBAR LOS ELEMENTOS HTML 
const compruebaElementoHtmlInput = (elemento: HTMLElement | null): elemento is HTMLInputElement => {
  return elemento !== null && elemento !== undefined && elemento instanceof HTMLInputElement;
}

const compruebaElementoHtmlDiv = (elemento: HTMLElement | null): elemento is HTMLDivElement => {
  return elemento !== null && elemento !== undefined && elemento instanceof HTMLDivElement;
}

const compruebaElementoHtmlButton = (elemento: HTMLElement | null): elemento is HTMLButtonElement => {
  return elemento !== null && elemento !== undefined && elemento instanceof HTMLButtonElement;
}

// COMPARA AMBOS NÚMEROS PARA VER SI ES MAY0R, IGUAL O MENOR.
const comparaNumeros = (numUsuario: number, resultado: number): string => {
  
  if(numUsuario > resultado){
    return "mayor";
  }
  else if (numUsuario < resultado){
    return "menor";
  }
  else{
    return "igual";
  }
}

// LOGÍCA PARA MOSTRAR EN PANTALLA LOS INTENTOS RESTANTES.
const pintaIntentos = (): void => {
  const elementoIntentos = document.getElementById("intentos");
  if(intentos > 1){  // SI INTENTOS ES MAYOR QUE 1 DESCUENTO 1. ESTO ES PARA EVITAR QUE ME DEJE HACER UN INTENTO EXTRA CUANDO YA HA LLEGADO A 0.
    intentos = intentos - 1;
      if (compruebaElementoHtmlDiv(elementoIntentos)) {
        elementoIntentos.textContent = `Intentos: ${intentos}`;
      }
  }
  else{  
      if (compruebaElementoHtmlDiv(elementoIntentos)) {
        intentos = 0;
        elementoIntentos.textContent = `Lo siento. Has perdido!!. Intentos restantes: ${intentos}`;
      }
    }  
  } 

// COMPRUEBA QUE SE HAYA INTRODUCIDO UN NÚMERO VÁLIDO Y LLAMA A LAS FUNCIONES NECESARIAS EN CADA CASO.  
const compruebaResultado = (): void => {
  const numUsuario = document.getElementById("numero");
  const resultado = document.getElementById("resultado");
  let mensaje = "";
  let pista = "";
  
  if(compruebaElementoHtmlInput(numUsuario) && compruebaElementoHtmlDiv(resultado)){
    if(numUsuario.value === ""){
      resultado.textContent = "Por favor introduce un número válido.";
    }
    else{
      pista = comparaNumeros(Number(numUsuario.value), Number(numero));
      switch(pista){
        case "mayor":
          pintaIntentos();
          mensaje = `"${numUsuario.value}" No es el número correcto. Pista: Tu número es MAYOR que el número secreto.`;
          break;
        case "menor":
          pintaIntentos();
          mensaje = `"${numUsuario.value}" No es el número correcto. Pista: Tu número es MENOR que el número secreto.`;
          break;
        case "igual":
          mensaje = `Felicidades!! Tu número: "${numUsuario.value}" es el correcto!`;
          break;
        default:
          mensaje = "Ups. Algo ha fallado.";
      }
      resultado.textContent = mensaje;
    }
  }
}

// MANEJADOR DE EVENTOS.
const creaEventos = (): void => {
  const evento = document.getElementById("boton");
  if(compruebaElementoHtmlButton(evento)){
    evento.addEventListener("click", compruebaResultado);
  }
}
  
// LLAMA AL MANEJADOR DE EVENTOS TRAS CARGAR EL HTML COMPLETO.
document.addEventListener("DOMContentLoaded", () => {
  creaEventos();
});
