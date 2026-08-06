import styles from "./posts.module.css";

export default function Posts() {

    const posts = [
        {
            id: 1,
            titulo: "Introdução ao Next.js",
            descricao: "Aprenda a criar aplicações modernas utilizando o framework Next.js."
        },
        {
            id: 2,
            titulo: "React para iniciantes",
            descricao: "Conheça os principais conceitos do React e seus componentes."
        },
        {
            id: 3,
            titulo: "JavaScript ES6",
            descricao: "Veja as novidades do JavaScript moderno e como utilizá-las."
        },
        {
            id: 4,
            titulo: "CSS Flexbox",
            descricao: "Aprenda a construir layouts responsivos utilizando Flexbox."
        },
        {
            id: 5,
            titulo: "Node.js",
            descricao: "Entenda como criar APIs e aplicações back-end com Node."
        },
        {
            id: 6,
            titulo: "Banco de Dados",
            descricao: "Introdução ao MySQL e PostgreSQL para aplicações web."
        }
    ];

    return (

        <section className={styles.posts}>

            <h1>Posts do Blog</h1>

            <p>
                Confira alguns artigos sobre programação,
                desenvolvimento web e tecnologia.
            </p>

            <div className={styles.cards}>

                {posts.map((post) => (

                    <div className={styles.card} key={post.id}>

                        <h2>{post.titulo}</h2>

                        <p>{post.descricao}</p>

                        <button>Ler artigo</button>

                    </div>

                ))}

            </div>

        </section>

    );

}