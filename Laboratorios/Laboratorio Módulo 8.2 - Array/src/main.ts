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

export const pacientes: Pacientes[] = [
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
const obtenPacientesAsignadosAPediatria: Pacientes[] = pacientes.filter(
  (paciente: Pacientes): boolean => paciente.especialidad === "Pediatra"
);
console.log(obtenPacientesAsignadosAPediatria);

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios: Pacientes[] =
  pacientes.filter(
    (paciente: Pacientes): boolean =>
      paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios);

// APARTADO 2
const activarProtocoloUrgencia: Pacientes | undefined = pacientes.find(
  (paciente: Pacientes): boolean =>
    paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
);
console.log(activarProtocoloUrgencia);

// APARTADO 3
const reasignaPacientesAMedicoFamilia = obtenPacientesAsignadosAPediatria.map(
  (paciente: Pacientes) => {
    return {
      ...paciente,
      especialidad: "Medico de familia",
    };
  }
);
console.log(reasignaPacientesAMedicoFamilia);

// APARTADO 4
const HayPacientesDePediatria: boolean = pacientes.some(
  (paciente: Pacientes): boolean => paciente.especialidad === "Pediatra"
);
console.log(HayPacientesDePediatria);

// APARTADO 5
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad: NumeroPacientesPorEspecialidad =
  pacientes.reduce(
    (
      acum: NumeroPacientesPorEspecialidad,
      paciente: Pacientes
    ): NumeroPacientesPorEspecialidad => {
      switch (paciente.especialidad) {
        case "Medico de familia":
          acum.medicoDeFamilia++;
          break;
        case "Pediatra":
          acum.pediatria++;
          break;
        case "Cardiólogo":
          acum.cardiologia++;
          break;
      }
      return acum;
    },
    {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0,
    }
  );
console.log(cuentaPacientesPorEspecialidad);
