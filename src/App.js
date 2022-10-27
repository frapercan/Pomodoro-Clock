import "./App.css";
import React, { useState } from "react";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Estado from "./componentes/estado";
import Contador from "./componentes/contador";
import Ciclos from "./componentes/ciclos";
import Boton from "./componentes/boton";
import ConfiguracionExtra from "./componentes/extraconfiguracion";

function App() {
  const [pausa, setPausa] = useState(1); // Pausa 1, corriendo 0
  const [estado, setEstado] = useState(1); // Trabajando 1, Descansando 0
  const [ciclo, setCiclo] = useState(1); // Trabajando 1, Descansando 0
  const [descansoExtra, setDescansoExtra] = useState(1); // marcado por defecto

  return (
    <Container maxWidth="lg">
      <Stack spacing={2} sx={{ textAlign: "center" }}>
        <Typography variant="h1" gutterBottom>
          Pomodoro's Clock
        </Typography>
        <Estado estado={estado} />
        <Contador
          pausa={pausa}
          estado={estado}
          setEstado={setEstado}
          ciclo={ciclo}
          setCiclo={setCiclo}
          descansoExtra={descansoExtra}
        />
        <Ciclos ciclo={ciclo} />
        <Boton pausa={pausa} setPausa={setPausa} />
        <ConfiguracionExtra
          descansoExtra={descansoExtra}
          setDescansoExtra={setDescansoExtra}
        />
      </Stack>
    </Container>
  );
}

export default App;
