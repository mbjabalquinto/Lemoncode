import { Reserva } from "./pedido.model";
import { reservas } from "./pedido.data";

class ReservaCliente{
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
    }

    protected calculaSubtotal(){
        // Reseteo los valores antes de volver a hacer los cálculos.
        this.subtotal = 0;
        this.total = 0;
        this.iva = 0;
        if (this.reservas && this.precios){
            for (let reserva of this.reservas){
                this.subtotal += this.precios[reserva.tipoHabitacion] * reserva.noches; // Nos ahorramos los if ya que gracias al interface tipoHabitacion va a ser siempre standard o suite.
                if (reserva.desayuno){
                    this.subtotal += 15 * reserva.pax * reserva.noches;
                }
            }

        }else{console.log("Algo ha fallado con los precios o las reservas");}         
     }

    protected calculaTotal(){
        this.total = this.subtotal * 1.21;
        this.iva = this.total - this.subtotal;
    }
}

class Particular extends ReservaCliente{
    constructor(reservas: Reserva[]){
        super(reservas, {"standard": 100, "suite": 150});
    }

    private calculaAdicionales(){
        for (let reserva of this.reservas){
            if (reserva.pax > 1){
                let adicionales = reserva.pax - 1;
                this.subtotal += adicionales * 40 * reserva.noches;
            }
        }
    } 
    
    public realizaCalculoCompleto(){  // Nos aseguramos que las llamadas a los métodos se hacen en el orden correcto. No hay posibilidad de error de esta forma.
        this.calculaSubtotal();
        this.calculaAdicionales();
        this.calculaTotal();
    }
}

class TourOperador extends ReservaCliente{
    constructor(reservas: Reserva[]){
        super(reservas, {"standard": 100, "suite": 100});
    }

    private calculaDescuento(){
        //this.subtotal = this.subtotal - (this.subtotal * 15 / 100);
        this.subtotal *= 0.85; // Así queda mas fino.
    }

    public realizaCalculoCompelto(){
        this.calculaSubtotal();
        this.calculaDescuento();
        this.calculaTotal()
    }
}

const mostrarResumen = (clase: ReservaCliente) =>{
    console.log("****************************")
    console.log(`Subtotal: ${clase.subtotal.toFixed(2)}€`);
    console.log(`IVA: ${clase.iva.toFixed(2)}€`);
    console.log(`Total: ${clase.total.toFixed(2)}€`);
}

console.log("--- Caso Cliente Particular ---");
const clienteParticular = new Particular(reservas);  // Creo el objeto de la clase hija
clienteParticular.realizaCalculoCompleto();         // Llamo al método que se encarga de toda la lógica
mostrarResumen(clienteParticular)                  // Muestro los datos

console.log("\n--- Caso Tour Operador ---");
const clienteTourOperador = new TourOperador(reservas);
clienteTourOperador.realizaCalculoCompelto();
mostrarResumen(clienteTourOperador);