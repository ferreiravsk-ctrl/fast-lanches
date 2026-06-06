import Header from "./componentes/Hearder.jsx";
import BannerPromocao from "./componentes/BannerPromocao.jsx";
import ListaProdutos from "./componentes/ListaProdutos.jsx";
import SobreNos from "./paginas/SobreNos.jsx";
import Contato from "./paginas/Contato.jsx";
import EntregaFlutuante from "./componentes/EntregaFlutuante.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <BannerPromocao
        titulo="Promoção!"
        preco="X-Salada + Batata = R$ 9,90"
      />

      <ListaProdutos />

      <SobreNos />

      <Contato />

      <EntregaFlutuante />
    </>
  );
}

export default App;