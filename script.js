//declaração de variáveis
const imagemVisualizada = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const miniaturaImagem0 = document.getElementById("0-imagem-miniatura")
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura")
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura")


const verdeCipreste = {
  nome: "verde-cipreste",
  pasta: "imagens-verde-cipreste",
  id: 0,
};
const azulInverno = {
  nome: "azul-inverno",
  pasta: "imagens-azul-inverno",
  id: 1,
};
const meiaNoite = {
  nome: "meia-noite",
  pasta: "imagens-meia-noite",
  id: 2,
};
const estelar = {
  nome: "estelar",
  pasta: "imagens-estelar",
  id: 3,
};
const rosaClaro = {
  nome: "rosa-claro",
  pasta: "imagens-rosa-claro",
  id: 4,
};
const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ["41 mm", "45 mm"];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let imagemSelecionada = 1;
let opcaoCorSelec 
let tamanhoSelecionado = 1;


function trocarImagem() {
  let idOpcaoSelecionada = document.querySelector(
    '[name = "opcao-imagem"]:checked'
  ).id;
  imagemSelecionada = idOpcaoSelecionada.charAt(0);
  imagemVisualizada.src =
    "./imagens/opcoes-cores/"+opcaoCorSelec.pasta+"/imagem-"+imagemSelecionada+".jpeg"
}

function trocarTamanho() {
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-tamanho"]:checked'
  ).id;
  tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
  tituloProduto.innerText =
    "Pulseira loop esportiva azul-inverno para caixa de " +
    opcoesTamanho[tamanhoSelecionado];
  if (tamanhoSelecionado == 1) {
    imagemVisualizada.classList.remove("visualizacao");
    imagemVisualizada.classList.add("visualizacao-grande");
  } else {
    imagemVisualizada.classList.remove('visualizacao-grande')
    imagemVisualizada.classList.add("visualizacao");
  }
}

function trocarCor(){
  
  let hashCor = document.getElementById('nome-cor-selecionada')
  const corSelecionada = document.querySelector('[name="opcao-cor"]:checked').id
  
  opcaoCorSelec = opcoesCores[corSelecionada.charAt(0)]
  imagemVisualizada.src =  "./imagens/opcoes-cores/"+opcaoCorSelec.pasta+"/imagem-"+imagemSelecionada+".jpeg"
  tituloProduto.innerText =
    "Pulseira loop esportiva "+opcaoCorSelec.nome+" para caixa de " +
    opcoesTamanho[tamanhoSelecionado];
  hashCor.innerText = 'Cor-'+opcaoCorSelec.nome
  //trocar miniatuara abaixo
  miniaturaImagem0.src='./imagens/opcoes-cores/'+opcaoCorSelec.pasta+'/imagem-0.jpeg' 
  miniaturaImagem1.src='./imagens/opcoes-cores/'+opcaoCorSelec.pasta+'/imagem-1.jpeg' 
  miniaturaImagem2.src='./imagens/opcoes-cores/'+opcaoCorSelec.pasta+'/imagem-2.jpeg' 
  
}