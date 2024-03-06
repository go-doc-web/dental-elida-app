import Image from "next/image";
import styles from "./page.module.css";
import pages from "@/data/pages";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.id} style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            <Link key={page.id} href={page.link} style={{ color: "blue" }}>
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
