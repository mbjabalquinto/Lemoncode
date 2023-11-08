type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// APARTADO 1
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesDePediatria: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesDePediatria.push(pacientes[i]);
    }
  }
  return pacientesDePediatria;
};

const pacientesDePediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesDePediatria);

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesDePediatria: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesDePediatria.push(pacientes[i]);
    }
  }
  return pacientesDePediatria;
};

const pacientesDePediatriaMenoresDe10Anios =
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(pacientesDePediatriaMenoresDe10Anios);

// APARTADO 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
      break;
    }
  }
  return activarProctolo;
};

let urgencia = activarProtocoloUrgencia(pacientes);
console.log(urgencia);

// APARTADO 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesReasignados: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      const elementoReasignado: Pacientes = {
        ...pacientes[i],
        especialidad: "Medico de familia",
      };
      pacientesReasignados = [...pacientesReasignados, elementoReasignado];
    }
  }
  return pacientesReasignados;
};

const pacientesReasignados = reasignaPacientesAMedicoFamilia(pacientes);
console.log(pacientesReasignados);

// APARTADO 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let hayPacientesPediatria = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      hayPacientesPediatria = true;
    }
  }
  return hayPacientesPediatria;
};

const pediatraACasa = HayPacientesDePediatria(pacientes);
console.log(pediatraACasa);

// APARTADO 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let recuentoPacientes: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Cardiólogo") {
      recuentoPacientes.cardiologia += 1;
    } else if (pacientes[i].especialidad === "Medico de familia") {
      recuentoPacientes.medicoDeFamilia += 1;
    } else if (pacientes[i].especialidad === "Pediatra") {
      recuentoPacientes.pediatria += 1;
    }
  }

  return recuentoPacientes;
};

const recuentoPacientesPorEspecialidad =
  cuentaPacientesPorEspecialidad(pacientes);
console.log(recuentoPacientesPorEspecialidad);
