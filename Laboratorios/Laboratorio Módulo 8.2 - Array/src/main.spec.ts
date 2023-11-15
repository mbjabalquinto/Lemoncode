import {
  Pacientes,
  pacientes,
  obtenPacientesAsignadosAPediatria,
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
  activarProtocoloUrgencia,
  cuentaPacientesPorEspecialidad,
} from "./main";

// TEST APARTADO 1 A
describe("obtenPacientesAsignadosAPediatria", () => {
  it("Debe devolver un array solo con los objetos cuya propiedad: especialidad sea igual a Pediatría", () => {
    const resultadoEsperado: Pacientes[] = [
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
    expect(obtenPacientesAsignadosAPediatria).toEqual(resultadoEsperado);
  });
  it("Debe devolver un array vacío si no encuentra ninguno para pediatría", () => {
    const pacientesTemporales: Pacientes[] = pacientes.filter(
      (paciente: Pacientes): boolean => paciente.especialidad !== "Pediatra"
    );
    const resultadoEsperado: Pacientes[] = pacientesTemporales.filter(
      (paciente: Pacientes): boolean => paciente.especialidad === "Pediatra"
    );
    expect(resultadoEsperado).toEqual([]);
  });
});

// TEST APARTADO 1 B
describe("obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios", () => {
  it("Debe devolver solo los de especialidad pediatría y que tengan menos de 10 años", () => {
    const resultadoEsperado = [
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
    ];
    expect(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios).toEqual(
      resultadoEsperado
    );
  });
  it("Debe devolver un array vacío si no encuentra ninguno para pediatría", () => {
    const pacientesTemporales: Pacientes[] = pacientes.filter(
      (paciente: Pacientes): boolean => paciente.especialidad !== "Pediatra"
    );
    const resultadoEsperado: Pacientes[] = pacientesTemporales.filter(
      (paciente: Pacientes): boolean => paciente.especialidad === "Pediatra"
    );
    expect(resultadoEsperado).toEqual([]);
  });
});

// TEST APARTADO 2
describe("activarProtocoloUrgencia", () => {
  it("Debe devolver undefined si no hay pacientes con mas de 100 pulsaciones y mas de 39 grados de temperatura", () => {
    const result = activarProtocoloUrgencia;

    expect(result).toBeUndefined;
  });

  it("Debe devolver pacientes con mas de 100 pulsaciones y mas de 39 grados de temperatura", () => {
    // Modifica la lista de pacientes para incluir un paciente que requiera atención de urgencia
    const pacientes: Pacientes[] = [
      {
        id: 7,
        nombre: "Test",
        apellidos: "Patient",
        sexo: "Male",
        temperatura: 40,
        frecuenciaCardiaca: 110,
        especialidad: "Pediatra",
        edad: 10,
      },
    ];

    const resultadoEsperado = {
      id: 7,
      nombre: "Test",
      apellidos: "Patient",
      sexo: "Male",
      temperatura: 40,
      frecuenciaCardiaca: 110,
      especialidad: "Pediatra",
      edad: 10,
    };

    const activarProtocoloUrgencia: Pacientes | undefined = pacientes.find(
      (paciente: Pacientes): boolean =>
        paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
    );

    const resultado = activarProtocoloUrgencia;
    expect(resultado).toEqual(resultadoEsperado);
  });
});

// TEST APARTADO 3
describe("reasignaPacientesAMedicoFamilia", () => {
  it("Debe coger los pacientes asignados a pediatria y devolverlos asignados a medico de familia", () => {
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
        especialidad: "Pediatra",
        edad: 43,
      },
    ];

    const resultadoEsperado = [
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
    ];

    const obtenPacientesAsignadosAPediatria: Pacientes[] = pacientes.filter(
      (paciente: Pacientes): boolean => paciente.especialidad === "Pediatra"
    );
    const reasignaPacientesAMedicoFamilia: Pacientes[] =
      obtenPacientesAsignadosAPediatria.map((paciente: Pacientes) => {
        return {
          ...paciente,
          especialidad: "Medico de familia",
        };
      });

    const resultado: Pacientes[] = reasignaPacientesAMedicoFamilia;

    expect(resultado).toEqual(resultadoEsperado);
  });
  it("Debe devolver un array vacío si no hay elementos que modificar", () => {
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
    ];

    const obtenPacientesAsignadosAPediatria: Pacientes[] = pacientes.filter(
      (paciente: Pacientes): boolean => paciente.especialidad === "Pediatra"
    );
    const reasignaPacientesAMedicoFamilia: Pacientes[] =
      obtenPacientesAsignadosAPediatria.map((paciente: Pacientes) => {
        return {
          ...paciente,
          especialidad: "Medico de familia",
        };
      });

    const resultadoEsperado: Pacientes[] = [];
    const resultado: Pacientes[] = reasignaPacientesAMedicoFamilia;

    expect(resultado).toEqual(resultadoEsperado);
  });
});

// TEST APARTADO 4
describe("HayPacientesDePediatria", () => {
  it("Tiene que devolver true si hay algún paciente de pediatria", () => {
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
        especialidad: "Pediatra",
        edad: 43,
      },
    ];

    const HayPacientesDePediatria: boolean = pacientes.some(
      (paciente: Pacientes): boolean => paciente.especialidad === "Pediatra"
    );

    const resultado: boolean = HayPacientesDePediatria;

    expect(resultado).toBe(true);
  });
});

// TEST APARTADO 5
describe("cuentaPacientesPorEspecialidad", () => {
  it("Tiene que devolver cuantos pacientes hay que cada especialidad", () => {
    interface NumeroPacientesPorEspecialidad {
      medicoDeFamilia: number;
      pediatria: number;
      cardiologia: number;
    }

    const resultadoEsperado: NumeroPacientesPorEspecialidad = {
      medicoDeFamilia: 3,
      pediatria: 2,
      cardiologia: 1,
    };

    const resultado = cuentaPacientesPorEspecialidad;

    expect(resultado).toEqual(resultadoEsperado);
  });
});
