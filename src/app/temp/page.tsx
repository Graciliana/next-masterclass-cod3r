import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <h1>Titulo Temporário</h1>
      <nav>
        <Link href="/temp/a/b/c">ABC</Link>
      </nav>
    </div>
  )
}