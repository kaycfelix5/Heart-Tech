import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        <div>
          <h2>TechBlog</h2>

          <p>
            Compartilhando conhecimento sobre programação e tecnologia.
          </p>
        </div>

        <div>

          <h3>Links</h3>

          <ul>

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

        </div>

        <div>

          <h3>Contato</h3>

          <p>contato@techblog.com</p>

          <p>(11) 99999-9999</p>

        </div>

      </div>

      <div className={styles.copy}>
        © 2026 TechBlog - Todos os direitos reservados.
      </div>

    </footer>
  );
}