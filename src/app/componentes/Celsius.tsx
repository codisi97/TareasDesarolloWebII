import React from 'react'

interface Props {
  valor: number;
}

export default function Celsius(props: Props) {
  return (
    <div>
      Celsius: {props.valor} °C
    </div>
  )
}