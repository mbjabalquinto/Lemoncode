import { Rutas } from "./rutas"
import { MiContextoProvider } from "./contexto";

export const App = () => {
  return (  // Envolvemos toda la aplicación con el provider.
    <MiContextoProvider>
      <Rutas />  
    </MiContextoProvider>
  )  
};

// Ahora llamamos directamente al componente Rutas, que se encargará de gestionar las rutas de la aplicación y renderizar los 
// componentes correspondientes según la URL. Esto nos permite tener una estructura más limpia y organizada en nuestra aplicación React.