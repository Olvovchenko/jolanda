import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>About page</h1>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </>
  );
}
