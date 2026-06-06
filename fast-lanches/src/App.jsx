import Header from "./components/Header";
import BannerPromocao from "./components/BannerPromocao";
import ListaProdutos from "./components/ListaProdutos";
import SobreNos from "./pages/SobreNos";
import Contato from "./pages/Contato";
import EntregaFlutuante from "./components/EntregaFlutuante";

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