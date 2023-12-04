import {
  controladorDeEventosDeCartas,
  controlaEventoBotonPartidaNueva,
} from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  controlaEventoBotonPartidaNueva();
  controladorDeEventosDeCartas();
});
