'use client';

import { useContext, useEffect, useState } from "react";
import { TriviaContext } from "./context/TriviaContext";

export default function Home() {
  const { preguntas, setPreguntas } = useContext(TriviaContext);

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<boolean | null>(null);
  const [mensaje, setMensaje] = useState("");
  const [puntaje, setPuntaje] = useState(0);

  useEffect(() => {
    setPreguntas([
      {
        idPreguntas: "1",
        DescripcionPregunta: "Honduras está ubicado en Centroamérica?",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },
      {
        idPreguntas: "2",
        DescripcionPregunta: "La bandera de Italia es verde, blanca y naranja?",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: false,
        puntajePregunta: 1,
      },
      {
        idPreguntas: "3",
        DescripcionPregunta: "Messi jugo por 15 años en el real madrid?",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: false,
        puntajePregunta: 1,
      },
      {
        idPreguntas: "4",
        DescripcionPregunta: "Spiderman es un personaje de dc comics?",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: false,
        puntajePregunta: 1,
      },
      {
        idPreguntas: "5",
        DescripcionPregunta: "Shrek es una pelicula de un ogro verde?",
        opcionRespuesta1: true,
        opcionRespuesta2: false,
        respuestaCorrecta: true,
        puntajePregunta: 1,
      },
    ]);
  }, [setPreguntas]);

  const responderPregunta = (respuesta: boolean) => {
    const pregunta = preguntas[preguntaActual];

    setRespuestaSeleccionada(respuesta);

    if (respuesta === pregunta.respuestaCorrecta) {
      setMensaje("Respuesta correcta");
      setPuntaje(puntaje + pregunta.puntajePregunta);
    } else {
      setMensaje("Respuesta incorrecta");
    }
  };

  const siguientePregunta = () => {
    setPreguntaActual(preguntaActual + 1);
    setRespuestaSeleccionada(null);
    setMensaje("");
  };

  const reiniciarJuego = () => {
    setPreguntaActual(0);
    setRespuestaSeleccionada(null);
    setMensaje("");
    setPuntaje(0);
  };

  if (preguntas.length === 0) {
    return <p>Cargando preguntas...</p>;
  }

  if (preguntaActual >= preguntas.length) {
    return (
      <main className="p-6">
        <h1 className="text-3xl font-bold">Juego terminado</h1>
        <p>Puntaje final: {puntaje}</p>

        <button
          onClick={reiniciarJuego}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
        >
          Reiniciar juego
        </button>
      </main>
    );
  }

  const pregunta = preguntas[preguntaActual];

  return (
    <main className="p-6">
      <header>
        <h2 className="text-xl font-bold">Puntaje actual: {puntaje}</h2>
      </header>

      <h1 className="text-3xl font-bold mt-4">Trivia</h1>

      <p className="mt-4">
        Pregunta {preguntaActual + 1} de {preguntas.length}
      </p>

      <h2 className="text-xl mt-4">{pregunta.DescripcionPregunta}</h2>

      <button
        onClick={() => responderPregunta(true)}
        disabled={respuestaSeleccionada !== null}
        className="bg-blue-600 text-white px-4 py-2 rounded mr-3 mt-4 disabled:bg-gray-500"
      >
        Verdadero
      </button>

      <button
        onClick={() => responderPregunta(false)}
        disabled={respuestaSeleccionada !== null}
        className="bg-red-600 text-white px-4 py-2 rounded mt-4 disabled:bg-gray-500"
      >
        Falso
      </button>

      {mensaje && <p className="mt-4 font-bold">{mensaje}</p>}

      {respuestaSeleccionada !== null && (
        <button
          onClick={siguientePregunta}
          className="bg-green-600 text-white px-4 py-2 rounded mt-4 block"
        >
          Siguiente pregunta
        </button>
      )}
    </main>
  );
}