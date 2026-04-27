import React from 'react'

interface Props {
  valor: number;
}

export default function Kelvin(props: Props) {
  const resultado = props.valor + 273.15;

  return (
    <div>
      Kelvin: {resultado} K
    </div>
  )
}