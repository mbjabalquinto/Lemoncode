import {
  Pacientes,
  pacientes,
  obtenPacientesAsignadosAPediatria,
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
} from "./main";

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

describe("obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios", () => {
  it("Debe devolver solo los de especialidad pediatría y que tengan menos de 10 años", () => {});
});
