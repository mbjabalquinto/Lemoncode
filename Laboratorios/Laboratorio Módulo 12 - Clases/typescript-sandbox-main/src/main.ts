import { Reserva } from "./pedido.model";
import { reservas } from "./pedido.data";

class ReservaCliente{
    nombre: string;
    reservas: Reserva[];
    precios: {[tipo: string]: number};
    subtotal: number;
    total: number;
    iva: number;
    constructor(reservas: Reserva[], precios: {[tipo: string]: number}){
        this.reservas = reservas;
        this.precios = precios;
        this.subtotal = 0;
        this.total = 0;
        this.iva = 0;
        this.nombre = "";
        
    }

    calculaTotal(){
        // Reseteo los valores antes de volver a hacer los cálculos.
        this.subtotal = 0;
        this.total = 0;
        this.iva = 0;
        if (this.reservas && this.precios){
            for (let reserva of this.reservas){
                if (reserva.tipoHabitacion === "standard"){
                    this.subtotal += this.precios["standard"] * reserva.noches;
                }
                if (reserva.tipoHabitacion === "suite"){
                    this.subtotal += this.precios["suite"] * reserva.noches;
                }
                if (reserva.pax > 1){
                    let adicionales = reserva.pax - 1;
                    this.subtotal += adicionales * 40 * reserva.noches;
                }
                if (reserva.desayuno){
                    this.subtotal += 15 * reserva.pax * reserva.noches;
                }
            }
        } 

        this.iva = (this.subtotal * 21) / 100;
        this.total = this.subtotal + this.iva;

     }

}

class Particular extends ReservaCliente{
    nombre = "PARTICULAR";
    constructor(reservas: Reserva[]){
        super(reservas, {"standard": 100, "suite": 150});
    }
}

class TourOperador extends ReservaCliente{
    nombre = "TOUR OPERADOR";
    constructor(reservas: Reserva[]){
        super(reservas, {"standard": 100, "suite": 100});
    }

    calculaDescuento(){
        //this.subtotal = this.subtotal - (this.subtotal * 15 / 100);
        this.subtotal *= 0.85; // Así queda mas fino.
    }

}

const mostrarResumen = (clase: ReservaCliente) =>{
    console.log("****************************")
    console.log(clase.nombre);
    console.log("--------------")
    console.log(`Total: ${clase.total.toFixed(2)}€`);
    console.log(`Subtotal: ${clase.subtotal.toFixed(2)}€`);
    console.log(`IVA: ${clase.iva.toFixed(2)}€`);
}

const clienteParticular = new Particular(reservas);

clienteParticular.calculaTotal();
mostrarResumen(clienteParticular)

const clienteTourOperador = new TourOperador(reservas);

clienteTourOperador.calculaTotal();
clienteTourOperador.calculaDescuento();
mostrarResumen(clienteTourOperador);