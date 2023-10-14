function actualizaTurno(turno){
    const numeroTurno = document.getElementById(turno);
    const cambioManual = document.getElementById("numero");
    if(cambioManual instanceof HTMLInputElement){
        if(numeroTurno !== null && numeroTurno !== undefined && cambioManual !== null && cambioManual !== undefined){
            if(Number(cambioManual.value) > 0){     // Controlamos que no se introduzcan valores negativos.
                numeroTurno.textContent = String(cambioManual.value).padStart(2, '0');
            }
        }
    }
}

function siguienteTurno(turno){
    const turnoSig = document.getElementById(turno);
    if(turnoSig !== null && turnoSig !== undefined){
        if(turnoSig instanceof HTMLElement){
            let valorActual = Number(turnoSig.textContent);
            let nuevoValor = valorActual + 1;
            let valorFinal = String(nuevoValor).padStart(2, '0');
            turnoSig.textContent = valorFinal;
        }
    }

}

function anteriorTurno(turno){
    const turnoSig = document.getElementById(turno);
    if(turnoSig !== null && turnoSig !== undefined){
        if(turnoSig instanceof HTMLElement){
            let valorActual = Number(turnoSig.textContent);
            if(valorActual > 0){    // Controlamos que el contador no quede en negativo.                 
                let nuevoValor = valorActual - 1;
                let valorFinal = String(nuevoValor).padStart(2, '0');
                turnoSig.textContent = valorFinal;
            }
        }
    }
}

function resetTurno(turno){
    const reset = document.getElementById(turno);
    if(reset !== null && reset !== undefined){
        let nuevoValor = "00";
        reset.textContent = nuevoValor;
    }
}

function addController(boton){
    const  botonPulsado = document.getElementById(boton);                              // Busca el elemento en el DOM.
    if(botonPulsado !== null && botonPulsado !== undefined){  
        if(boton == "siguiente"){                                
            botonPulsado.addEventListener("click", () => siguienteTurno("turno"));  // Añade el controlador de eventos.
        }
        else if(boton == "anterior"){
            botonPulsado.addEventListener("click", () => anteriorTurno("turno"));
        }
        else if(boton == "reset"){
            botonPulsado.addEventListener("click", () => resetTurno("turno"));
        }
        else if(boton == "cambiar"){
            botonPulsado.addEventListener("click", () => actualizaTurno("turno"));
        }
    }
}


addController("siguiente");
addController("anterior");
addController("reset");
addController("cambiar");