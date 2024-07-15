import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-950">
      <h1 className="font-bold">Masterclass Next</h1>
      <nav className="flex flex-col">
        <Link href="/primeiro">Primeiro Componente</Link>
        <Link href="/flexbox">Flexbox</Link>
      </nav>
    </div>
    
  );
}
