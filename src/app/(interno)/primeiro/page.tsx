import Link from "next/link";

export default function Primeiro() {
  const raio = 4.5;
  const PI = 3.14159;

  const titulo = (
    <div>
      <h1>Primeiro Componente</h1>
      <h2>Assunstos importantes para o primeiro componentes</h2>
    </div>
  );
  function anoatual() {
    return new Date().getFullYear();
  }

  function gerarUmaLista() {
    return (
      <ul className="pl-12 list-disc">
        <li>Ada</li>
        <li>Bravo</li>
        <li>Jaquec</li>
      </ul>
    );
  }
  return (
    <div>
      <h1>Primeiro</h1>
      {titulo}
      <nav>
        <Link href="/">Inicio</Link>
      </nav>
      <div className="flex flex-col">
        <span>{2 ** 2}</span>
        <span>{Math.random()}</span>
        <span>{anoatual()}</span>
      </div>
      {gerarUmaLista()}
      <div>
        <span>{PI * Math.pow(raio, 2)}</span>
      </div>
    </div>
  );
}
