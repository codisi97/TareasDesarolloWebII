import Image from "next/image";
import Conversor from "./componentes/conversor";
import Celsius from "./componentes/Celsius";
import Fahrenheit from "./componentes/Fahrenheit";
import Kelvin from "./componentes/Kelvin";

export default function Home() {
  return (
     <div>
      <h1>Conversor de temperatura</h1>

      <Celsius valor={15} />
      <Fahrenheit valor={24} />
      <Kelvin valor={18} />
    </div>
  );
}
