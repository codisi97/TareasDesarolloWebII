import React from 'react'

interface Props {
  valor: number;
}

export default function Fahrenheit(props: Props) {
  const resultado = (props.valor * 9) / 5 + 32;

  return (
    <div>
      Fahrenheit: {resultado} °F
    </div>
  )
}