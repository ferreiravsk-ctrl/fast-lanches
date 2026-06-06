function ListaProdutos() {
  return (
    <div id="maisVendidos">
      <h1 id="tituloConteudo">Nossos Lanches</h1>

      <div id="areaProdutos">
        <table>
          <tbody>
            <tr>
              <td>
                <p className="tituloProduto">X-Salada</p>

                <img
                  src="/images/xsalada.jpg"
                  alt="X-Salada"
                />

                <p className="precoProduto">
                  R$ 8,00
                </p>
              </td>

              <td>
                <p className="tituloProduto">Cheddar</p>

                <img
                  src="/images/cheddar.jpg"
                  alt="Cheddar"
                />

                <p className="precoProduto">
                  R$ 17,00
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListaProdutos;