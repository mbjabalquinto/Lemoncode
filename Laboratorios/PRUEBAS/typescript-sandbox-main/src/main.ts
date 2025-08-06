class Animal{
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }

    haceRuido(){
        return "Algún sonido genérico";
    }

    duerme(){
        return "Zzzzz";
    }
}

class Gato extends Animal{
    raza: string;
    constructor(nombre: string, edad: number, raza: string){
        super(nombre, edad);
        this.raza = raza;
    }

    haceRuido(){
        return "Miauuuuu";
    }
}

const pepe = new Gato("Pepe", 8, "callejero");

console.log(pepe);
console.log(pepe.duerme());
console.log(pepe.haceRuido());