type TarjetaPersonaProps = {
  nombre: string;
  ocupacion: string;
  pais: string;
};

export default function TarjetaPersona(props: TarjetaPersonaProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "250px",
      }}
    >
      <h2>{props.nombre}</h2>
      <p>Ocupación: {props.ocupacion}</p>
      <p>País: {props.pais}</p>
    </div>
  );
}