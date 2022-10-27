import React, { useState, useEffect } from "react";
import "./contador.css";

import sonidito from "./sonidito.mp3";

function Contador(props) {
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(10);

  const audio = new Audio(sonidito);

  useEffect(() => {
    //Si el el reloj está corriendo
    if (!props.pausa) {
      if (segundos !== 0) {
        setTimeout(() => {
          setSegundos(segundos - 1);
        }, 1000);
      } else {
        if (minutos !== 0) {
          setTimeout(() => {
            setMinutos(minutos - 1);
            setSegundos(59);
          }, 1000);
          // Cuando el reloj llega a 00:00
        } else {
          console.log(minutos,segundos,'play')
          audio.play();
          props.setEstado(!props.estado);
          //Si estamos descansando
          if (props.estado) {
            // Si es el cuarto ciclo y tenemos configurado el descanso extra
            if (props.descansoExtra & (props.ciclo % 4 == 0)) {
              setMinutos(10);
            } else {
              setMinutos(5);
            }
            // Si retomamos el trabajo tras un descanso
          } else {
            setMinutos(25);
            props.setCiclo(props.ciclo + 1);
          }
        }
      }
    }
  }, [segundos, minutos, props]);
  // padstart
  return (
    <span class="dot">
      {String(minutos).padStart(2, "0")}:{String(segundos).padStart(2, "0")}
    </span>
  );
}

export default Contador;
