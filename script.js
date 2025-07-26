<script>
  let posicao = 0;
  const carrossel = document.getElementById("carrossel");
  const totalImagens = carrossel.children.length;

  function moverCarrossel(direcao) {
    posicao += direcao;
    if (posicao < 0) {
      posicao = totalImagens - 1;
    } else if (posicao >= totalImagens) {
      posicao = 0;
    }

    const larguraImagem = carrossel.children[0].clientWidth;
    carrossel.style.transform = `translateX(-${posicao * larguraImagem}px)`;
  }
</script>
