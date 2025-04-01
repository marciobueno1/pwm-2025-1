// import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link";
import { Cabecalho } from "@/components/Cabecalho";

export default function Home() {
  return (
    <>
      <Cabecalho />
      <Link href="/starWars">Star Wars</Link>
    </>
  );
}
