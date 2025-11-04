const botoes = document.querySelectorAll(".botao");
const times = document.querySelectorAll(".time");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
    botao.classList.add("selecionado");

    
    const timeSelecionado = document.querySelector(".time.selecionado");
    timeSelecionado.classList.remove("selecionado");
    times[indice].classList.add("selecionado");
  });
});
