function Contato() {
  return (
    <section id="contato">
      <h2>Contato</h2>

      <form>
        <label htmlFor="nome">Nome</label>

        <input
          type="text"
          id="nome"
          placeholder="Digite seu nome"
        />

        <label htmlFor="email">
          E-mail
        </label>

        <input
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
        />

        <label htmlFor="mensagem">
          Mensagem
        </label>

        <textarea
          id="mensagem"
          rows="5"
          placeholder="Digite sua mensagem"
        ></textarea>

        <button type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contato;