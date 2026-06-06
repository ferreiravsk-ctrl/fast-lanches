function BannerPromocao({ titulo, preco }) {
  return (
    <div id="promotionBanner">
      <h1 id="promocaoH1">{titulo}</h1>

      <h2 id="promocaoValor">{preco}</h2>
    </div>
  );
}

export default BannerPromocao;