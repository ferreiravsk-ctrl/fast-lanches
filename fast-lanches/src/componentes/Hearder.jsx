function Header() {
  return (
    <div id="header">
      <div id="logo">
        <img
          id="logoImg"
          src="/images/sonic-removebg-preview.png"
          alt="Logo"
        />

        <h1 id="tituloLogo">Fast Lanches</h1>
      </div>

      <div id="menu">
        <ul className="listaMenu">
          <li>Sobre Nós</li>
          <li>Lanches</li>
          <li>Contato</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;