// modifica la lógica

let turno: number = 0;

const siguienteTurno = (): void => {
  turno++;
  pintaTurno(turno);
};

const anteriorTurno = (): void => {
  if (turno > 0) {
    turno--;
    pintaTurno(turno);
  }
};

function resetTurno(): void {
  turno = 0;
  pintaTurno(turno);
}

// modifica ui

const pintaTurno = (turno: number): void => {
  const numeroTurno = document.getElementById("turno");
  if (
    numeroTurno !== null &&
    numeroTurno !== undefined &&
    numeroTurno instanceof HTMLHeadingElement
  ) {
    numeroTurno.textContent = turno.toString().padStart(2, "0");
  } else {
    console.log("Error al pintar el turno");
  }
};

const actualizaTurno = (): void => {
  const nuevoTurno = document.getElementById("numero");
  if (
    nuevoTurno !== undefined &&
    nuevoTurno !== null &&
    nuevoTurno instanceof HTMLInputElement
  ) {
    if (Number(nuevoTurno.value) > 0) {
      // Controlamos que no se introduzcan valores negativos.
      turno = Number(nuevoTurno.value);
      pintaTurno(turno);
    }
  } else {
    console.log("Error al actualizar el turno");
  }
};

// modifica eventos
const crearEventoBoton = (id: string, func: () => void): void => {
  const boton = document.getElementById(id);
  if (
    boton !== null &&
    boton !== undefined &&
    boton instanceof HTMLButtonElement
  ) {
    boton.addEventListener("click", func); // Añade el controlador de eventos.
  } else {
    console.log("Error al crear el evento");
  }
};

const eventos = () => {
  crearEventoBoton("siguiente", siguienteTurno);
  crearEventoBoton("anterior", anteriorTurno);
  crearEventoBoton("reset", resetTurno);
  crearEventoBoton("cambiar", actualizaTurno);
};

// La primera vez que se carga la página, una vez ha cargado todos los elementos llama a las funciones indicadas.
document.addEventListener("DOMContentLoaded", () => {
  pintaTurno(turno);
  eventos();
});
