'use client';

import { useState } from 'react';
import { TriviaContext } from '../context/TriviaContext';
import { Preguntas } from '../modelos/Preguntas';

export function TriviaProvider({
  children}: {
  children: React.ReactNode;
}) 
{
  const [preguntas, setPreguntas] = useState<Preguntas[]>([]);
  return (
    <TriviaContext.Provider
      value={{
        preguntas,
        setPreguntas,
      }}>{children}
    </TriviaContext.Provider>
  );
}