// Definir una cola de tareas
const colaDeTareas: Array<() => void> = [];   // Así se tipa un array de funciones que no devuelven nada.

// Función para agregar una tarea a la cola
function encolarTarea(tarea: () => void) {
    colaDeTareas.push(tarea);
}

// Función para ejecutar una tarea
function ejecutarTarea(task: () => void): void {
    task();
}

function eventLoop(): void {
    while (colaDeTareas.length > 0) {
        // Obtener la próxima tarea de la cola
        const tarea: (() => void) | undefined = colaDeTareas.shift();   // Ojo! shift puede devolver undefined si el array está vacío.
        console.log(colaDeTareas.length);
        // Ejecutar la tarea
        if(tarea){
            ejecutarTarea(tarea);
        }
    }
    // Si no hay más tareas en la cola, pausar el event loop
    // hasta que se agregue una nueva tarea
    if (colaDeTareas.length === 0) {
      console.log("Event Loop en pausa.");
    }
    // Volver a ejecutar el event loop en el próximo ciclo de eventos
    // Es decir, dejo que se ejecute código que estaba esperando
    setTimeout(eventLoop, 0);
}

// Ejemplos de tareas
function tarea1(): void {
    console.log("Tarea 1 ejecutada.");
}

function tarea2(): void {
    console.log("Tarea 2 ejecutada.");
}

function tarea3(): void {
    console.log("Tarea 3 - Yo voy más tarde...");
}

function tarea4(): void {
    console.log("Tarea encolada.");
}

for(let i = 0; i < 20; i++){
    setTimeout(() => {
        encolarTarea(tarea4);
    }, 2000 * (i + 1));
}

// Agregar tareas a la cola
encolarTarea(tarea1);
encolarTarea(tarea2);

// Iniciar el event loop
eventLoop();

setTimeout(() => {
//Fíjate que lo puedo ejecutar a pesar de que el Event Loop lo hayamos lanzado
encolarTarea(tarea3);
}, 4000);

//setTimeout(() => {
//encolarTarea(tarea4);
//}, 6000);
   