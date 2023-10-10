import Link from "next/link";
import Header from "../../Components/Header/header";

export default function About() {
  return (
    <div>
      <Header />
      <h1>About page</h1>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </div>
  );
}
