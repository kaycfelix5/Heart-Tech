import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.bannerTexto}>
          <h1>Bem-vindo ao TechBlog</h1>

          <p>
            O seu espaço para aprender programação, desenvolvimento web,
            inteligência artificial e as principais tendências da tecnologia.
          </p>

          <Link href="/posts">
            <button>Ver Posts</button>
          </Link>
        </div>
      </section>

      <section className={styles.destaques}>

        <h2>Posts em Destaque</h2>

        <div className={styles.cards}>

          <div className={styles.card}>
            <h3>Introdução ao Next.js</h3>

            <p>
              Aprenda como criar aplicações modernas utilizando o framework
              React mais utilizado atualmente.
            </p>

            <Link href="/posts">
              <button>Ler mais</button>
            </Link>
          </div>

          <div className={styles.card}>
            <h3>JavaScript Moderno</h3>

            <p>
              Descubra recursos como Arrow Functions, Promises, Async/Await e
              ES6.
            </p>

            <Link href="/posts">
              <button>Ler mais</button>
            </Link>
          </div>

          <div className={styles.card}>
            <h3>CSS Responsivo</h3>

            <p>
              Aprenda a construir interfaces bonitas utilizando Flexbox e Grid.
            </p>

            <Link href="/posts">
              <button>Ler mais</button>
            </Link>
          </div>

        </div>

      </section>
    </>
  );
}