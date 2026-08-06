import styles from "./sobre.module.css";

export default function Sobre() {
    return (
        <section className={styles.sobre}>

            <div className={styles.container}>

                <h1>Sobre o TechBlog</h1>

                <p>
                    O TechBlog foi criado com o objetivo de compartilhar
                    conhecimento sobre programação, desenvolvimento web,
                    inteligência artificial e as principais tecnologias do
                    mercado.
                </p>

                <p>
                    Aqui você encontrará artigos, tutoriais e dicas para
                    estudantes, desenvolvedores iniciantes e profissionais que
                    desejam evoluir continuamente.
                </p>

                <div className={styles.info}>

                    <div className={styles.card}>
                        <h2>🎯 Missão</h2>

                        <p>
                            Ensinar tecnologia de forma clara, prática e
                            acessível para todos.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2>🚀 Visão</h2>

                        <p>
                            Tornar-se uma referência na divulgação de conteúdo
                            sobre programação e inovação.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2>💻 Conteúdo</h2>

                        <p>
                            Next.js, React, JavaScript, Node.js, Banco de Dados,
                            HTML, CSS e muito mais.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}