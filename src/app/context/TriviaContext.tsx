'use client';
import { createContext, useState } from 'react';
import { Preguntas } from '../modelos/Preguntas';


export const TriviaContext = createContext({
  preguntas: [] as Preguntas[],
  setPreguntas: (preguntas: Preguntas[]) => {},


});

