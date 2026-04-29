"use client";

import { useEffect, useState } from "react";
import BotonEspañol from "./componentes/BtnEspañol";
import BotonIngles from "./componentes/BtnIngles";

export default function Home() {
  const palabras = [
    { es: "Casa", en: "House" },
    { es: "Perro", en: "Dog" },
    { es: "Comida", en: "Food" },
    { es: "Escuela", en: "School" },
    { es: "Libro", en: "Book" },
    { es: "Agua", en: "Water" },
    { es: "Amigo", en: "Friend" },
    { es: "Ciudad", en: "City" },
    { es: "Carro", en: "Car" },
    { es: "Familia", en: "Family" },
  ];

  const [idioma, setIdioma] = useState("es");
  const [lista, setLista] = useState<string[]>([]);

  useEffect(() => {
    const nuevaLista = palabras.map((palabra) =>
      idioma === "es" ? palabra.es : palabra.en
    );

    setLista(nuevaLista);
  }, [idioma]);

  return (
    <main>
      <h1>Cambio de Idioma</h1>

      <BotonEspañol cambioIdioma={() => setIdioma("es")} />
      <BotonIngles cambioIdioma={() => setIdioma("en")} />

      <h2>Idioma actual: {idioma === "es" ? "Español" : "Inglés"}</h2>

      <ul>
        {lista.map((palabra, index) => (
          <li key={index}>{palabra}</li>
        ))}
      </ul>
    </main>
  );
}