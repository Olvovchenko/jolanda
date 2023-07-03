import Link from "next/link";

export default function Navbar() {
  return (
    <div
      style={{
        width: "90%",
        // border: "1px solid black",
        display: "flex",
        justifyContent: "space-around",
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "50px",
      }}
    >
      <div style={{ fontFamily: "Inknut Antiqua" }}>ПРО МЕНЕ</div>
      <div style={{ fontFamily: "Inknut Antiqua" }}>
        МОЇ ПРОЕКТИ І ПУБЛІКАЦІЇ
      </div>
      <Link href="/about" style={{ fontFamily: "Inknut Antiqua" }}>
        МОЇ ПОСЛУГИ
      </Link>
      <div style={{ fontFamily: "Inknut Antiqua" }}>МАЙСТЕРКЛАСИ</div>
    </div>
  );
}
