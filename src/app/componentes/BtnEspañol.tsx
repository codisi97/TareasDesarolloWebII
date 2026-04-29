type Props = {
  cambioIdioma: () => void;
}

export default function BotonEspañol(props: Props) {
  return (
    <button onClick={props.cambioIdioma}
    style={{
        padding: "10px 15px",
        margin: "5px",
        backgroundColor: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}>
      Cambiar idioma Español
    </button>
  );
}