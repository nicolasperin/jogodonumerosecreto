let numerosSorteados = [];
let numeroLimiteLista = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;
  let palavraChute = chute > numeroSecreto ? "menor" : "maior";
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "ACERTOU!");
    let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    exibirTextoNaTela("p", `O número secreto é ${palavraChute}`);
  }
  tentativas++;
  limparCampo();
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimiteLista + 1);
  let quantidadeDeElementosNaLista = numerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimiteLista) {
    numerosSorteados = [];
  }

  if (numerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    numerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
