"use client";

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <h1>TechBlog</h1>
      </div>

      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href="/">Início</Link>
          </li>

          <li>
            <Link href="/posts">Posts</Link>
          </li>

          <li>
            <Link href="/sobre">Sobre</Link>
          </li>

          <li>
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}