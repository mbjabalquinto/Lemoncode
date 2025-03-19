/*
import Axios from "axios";

const habitaciones = Axios.get("http://localhost:3000/habitaciones");
console.log(habitaciones);
habitaciones.then((response) => console.log(response.data));
console.log("Yo primero");

Axios.get("http://localhost:3000/habitaciones")
  .then(({ data }) =>
    console.log(data)
    );
  .catch((error) => {
    console.log("Error al realizar la solicitud chaval:", error);
  });
console.log("Yo primero segunda parte");
*/

import Axios from "axios";

const inicio = Date.now();

Axios.get("http://localhost:3000/habitaciones")
  .then((response) => {
    const fin = Date.now();
    const tiempoTranscurrido = fin - inicio;
    console.log(
      `La solicitud tardó ${tiempoTranscurrido} milisegundos en completarse.`
    );
    console.log(response);
  })
  .catch((error) => {
    console.error("Error al realizar la solicitud chaval:", error);
  });
