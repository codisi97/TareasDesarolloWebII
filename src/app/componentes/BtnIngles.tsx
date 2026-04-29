type Props = {
  cambioIdioma: () => void;
}

export default function BotonIngles(props: Props) {
  return (
    <button onClick={props.cambioIdioma}
        style={{
        padding: "10px 15px",
        margin: "5px",
        backgroundColor: "#16a34a",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}>
      Cambiar idioma Ingles
    </button>
  );
}