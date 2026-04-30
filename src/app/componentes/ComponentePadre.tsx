"use client";

import { useEffect, useState } from "react";
import TarjetaPersona from "./TarjetaPersona";

type Persona = {
  nombre: string;
  ocupacion: string;
  pais: string;
};

export default function ComponentePadre() {
  const [personas, setPersonas] = useState<Persona[]>([]);

  useEffect(() => {
    setPersonas([
      { nombre: "Juan Pérez", ocupacion: "Ingeniero", pais: "Honduras" },
      { nombre: "Ana López", ocupacion: "Doctora", pais: "México" },
      { nombre: "Carlos Ruiz", ocupacion: "Arquitecto", pais: "España" },
      { nombre: "María Díaz", ocupacion: "Diseñadora", pais: "Argentina" },
      { nombre: "Luis Gómez", ocupacion: "Programador", pais: "Colombia" },
    ]);
  }, []);

  return (
    <section>
      <h1>Tarjetas de Presentación</h1>

      <div>
        {personas.map((persona, index) => (
          <TarjetaPersona
            key={index}
            nombre={persona.nombre}
            ocupacion={persona.ocupacion}
            pais={persona.pais}
          />
        ))}
      </div>
    </section>
  );
}