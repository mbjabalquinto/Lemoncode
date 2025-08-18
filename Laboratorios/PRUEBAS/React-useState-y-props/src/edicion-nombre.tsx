// Componente HIJO
import React from "react";

interface Props{
    nombreInicial: string;
    onActualizarNombre: (nuevoNombre: string) => void;
}

export const EdicionNombre: React.FC<Props> = (props) => { // Recibo las props del PADRE.
    const { nombreInicial, onActualizarNombre } = props; // Hago destructuring de las props. onAcutalizarNombre es setNombre en el PADRE.
    const [nombreTemporal, setNombreTemporal] = React.useState(nombreInicial);

    return (
        <>
             {/* Pinto el input con el nombre que he recibido en la llamada del Padre 
             Si hay algún cambio lo actualizo pasándole a la función el nuevo valor tecleado*/}
            <label>Nombre:</label>
            <input
                value={nombreTemporal} 
                onChange={(event) => setNombreTemporal(event.target.value)}
                
            />
            <button 
                onClick= {() => onActualizarNombre(nombreTemporal)}
            
            > Actualizar nombre
            </button>        
        </>

    )
}