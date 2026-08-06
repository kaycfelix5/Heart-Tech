import styles from "./contato.module.css";

export default function Contato() {
    return (
        <section className={styles.contato}>

            <div className={styles.container}>

                <h1>Entre em Contato</h1>

                <p>
                    Tem alguma dúvida, sugestão ou deseja entrar em contato?
                    Preencha o formulário abaixo.
                </p>

                <form className={styles.formulario}>

                    <input
                        type="text"
                        placeholder="Digite seu nome"
                    />

                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                    />

                    <input
                        type="text"
                        placeholder="Assunto"
                    />

                    <textarea
                        placeholder="Escreva sua mensagem..."
                        rows="8"
                    ></textarea>

                    <button type="submit">
                        Enviar Mensagem
                    </button>

                </form>

            </div>

        </section>
    );
}