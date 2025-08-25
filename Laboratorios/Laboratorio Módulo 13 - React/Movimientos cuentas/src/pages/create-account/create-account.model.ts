export interface CreateAccountVm {
  type: string;
  name: string;
}

export const createEmptyAccountVm = (): CreateAccountVm => ({
  type: "",
  name: "",
});

export interface CreateAccountError {
  type: string;
  name: string;
}

export const createEmptyAccountError = (): CreateAccountError => ({
  type: "",
  name: "",
});

export const accountOptions = [
  { label: "Cuenta Corriente", value: "1" },
  { label: "Cuenta de Ahorro", value: "2" },
  { label: "Cuenta de Nómina", value: "3" },
];