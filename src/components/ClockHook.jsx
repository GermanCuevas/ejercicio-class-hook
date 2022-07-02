import { useEffect, useState } from "react";

const ClockHook = () => {
  const person = {
    fecha: new Date(),
    edad: 0,
    nombre: "Lucas",
    apellidos: "Montenegro",
  };

  const [estado, setEstado] = useState(person);

  /* Si indicamos corchetes vacios, solo corre una vez. Si no indicamos nada, corre toda las veces*/
  useEffect(() => {
    const intervalId = setInterval(() => {
      setEstado({ ...estado, edad: estado.edad + 1, fecha: new Date() });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div>
      <h1>Clock con Hooks</h1>
      <h2>Hora Actual: {estado.fecha.toLocaleTimeString()}</h2>
      <h3>
        {estado.nombre} {estado.apellidos}
      </h3>
      <h1>Edad: {estado.edad}</h1>
    </div>
  );
};

export default ClockHook;
