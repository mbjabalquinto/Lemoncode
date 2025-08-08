interface Salario{
    readonly salarioBruto: number,
    readonly deduccionIRPF: number,
    readonly deduccionSS: number,
    readonly neto: number,
    readonly horasTrabajadas?: number,  // opcional 
};

abstract class Empleado{
    public nombre: string;
    public id: string;
    public neto: number; 
    protected _salarioBase: number;
    constructor(nombre: string, id: string){
        this.nombre = nombre;
        this.id = id;
        this._salarioBase = 0; // Protegido. Se va a gestionar un getter o un setter.
        this.neto = 0; // Inicializamos el salario neto a 0.
    };

    public get salarioBase(): number{
        return this._salarioBase;
    };

    public set salarioBase(nuevoSalario: number){
        if (nuevoSalario < 0){
            console.error("¡El valor no puede ser negativo!")
            return; // Detenemos la ejecución.
        }

        this._salarioBase = nuevoSalario;
    };


    public abstract calcularSalarioNeto(): Salario; // método abstracto que deben implementar las clases hijas. Aquí tiene que ir vacío.

    protected _calcularDeduccionSS(salarioBruto: number): number{
        // Calcula deducción Seg.Social 9%. Común para las clases hijas.
        return salarioBruto * 0.09;
    };

    public imprimeResumen(salario: Salario){
        console.log("📊 Resumen del salario:");
        console.log(`💰 Salario Bruto: ${salario.salarioBruto} €`);
        console.log(`📉 Deducción IRPF: ${salario.deduccionIRPF.toFixed(2)} €`);
        console.log(`🛡️ Deducción S.S: ${salario.deduccionSS.toFixed(2)} €`);
        console.log(`✅ Salario Neto: ${salario.neto.toFixed(2)} €`);

        if (salario.horasTrabajadas !== undefined){
            console.log(`⏱️ Horas trabajadas: ${salario.horasTrabajadas}`);
        }
    };

};

class EmpleadoFijo extends Empleado{
    // Específico para las clase hija.
    // 5% sobre el bruto de paga extra prorrateada
    // IRPF 15%
    constructor(nombre: string, id: string){
        super(nombre, id)
    }

    calcularSalarioNeto(){
        const salarioBruto = this._salarioBase * 1.05; // añado el 5% de la paga extra. SALARIO BRUTO REAL.
        // Calculamos las deducciones
        const deduccionSS = this._calcularDeduccionSS(salarioBruto); // Deducimos 9% S.S.
        const deduccionIRPF = salarioBruto * 0.15; // Deducimos 15% de IRPF
        // Restamos las deducciones al bruto.
        this.neto = salarioBruto - deduccionSS - deduccionIRPF;

        return { salarioBruto, deduccionIRPF, deduccionSS, neto: this.neto}; // Devolvemos un objeto con todas las variables
    };

};

class EmpleadoPorHoras extends Empleado{
    // Precio por hora
    protected _horasTrabajadas: number;
    constructor(nombre: string, id: string){
        super(nombre, id);
        this._horasTrabajadas = 0;
    }

    public get horasTrabajadas(){
        return this._horasTrabajadas;
    }
   
    public set horasTrabajadas(horas: number){
        if (horas < 0){
            console.error("¡El valor no puede ser negativo!")
            return; // Detenemos la ejecución.
        }
        this._horasTrabajadas = horas;
    }

    calcularSalarioNeto(){
        const salarioBruto = this._salarioBase * this._horasTrabajadas;
        const deduccionSS = this._calcularDeduccionSS(salarioBruto);
        const deduccionIRPF = salarioBruto * 0.1;
        this.neto = salarioBruto - deduccionIRPF - deduccionSS;
        return { salarioBruto, deduccionIRPF, deduccionSS, neto: this.neto, horasTrabajadas: this._horasTrabajadas};
    }

};

console.log("-------------Empleado FIJO----------------");
const empleado1 = new EmpleadoFijo("Manolo García", "E001");
empleado1.salarioBase = 1400; // Salario base (bruto).
const nomina1 = empleado1.calcularSalarioNeto();
empleado1.imprimeResumen(nomina1);

console.log("-----------Empleado por HORAS--------------");
const empleado2 = new EmpleadoPorHoras("Pedro Jimenez", "E002");
empleado2.horasTrabajadas = 80;
empleado2.salarioBase = 15;
const nomina2 = empleado2.calcularSalarioNeto();
empleado2.imprimeResumen(nomina2);


