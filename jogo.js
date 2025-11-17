// Variáveis globais
var Ponto = 0; // Pontuação
var Contador = 0; // Contador
var Perguntas; // Guarda as pergunta do Banco.php

const PerguntaAtual = document.getElementById("H1"); // Pergunta atual ex:(Pergunta 1)
const Pergunta = document.getElementById("H2"); // Texto da pergunta ex:(O quê significa CSS?)
const RespostaCorreta = document.getElementById("H3"); // Texto da resposta correta ex:(A resposta correta é)
const BotaoA = document.getElementById("A"); // Botão opção A
const BotaoB = document.getElementById("B"); // Botão opção B
const BotaoC = document.getElementById("C"); // Botão opção C
const BotaoD = document.getElementById("D"); // Botão opção D
const BotaoProximo = document.getElementById("Proximo"); // Botão de Proximo
const BotaoOpcoes = [BotaoA, BotaoB, BotaoC, BotaoD]; // Agrupar os botões de opções

// Chama a função para buscar as perguntas do Banco.php
BancoPerguntas();

// Função para buscar as perguntas no Banco.php
async function BancoPerguntas() {
    // Busca no (Banco.php)
    const resposta = await fetch('Banco.php');
    
    // guarda na variável global
    Perguntas = await resposta.json();
    
    // chama a função para mostrar MostrarPergunta
    MostrarPergunta();
}

// Função para mostrar a pergunta atual
function MostrarPergunta(){

    // Verifica se chegou na pergunta 10
    if(Contador >= 10){
        sessionStorage.setItem('pontuacaoFinal', Ponto); // Total de pontos
        location.href = "Pontos.html"; // Enviar para a página de pontos
        return; 
    } 

PerguntaAtual.innerText = "PERGUNTA " + (Contador + 1); // Mostra Pergunta 1,2,3...
Pergunta.innerText = Perguntas[Contador].pergunta; // Atualiza o texto da pergunta       
BotaoA.innerText = Perguntas[Contador].opcao[0]; // Atualiza o texto da opção A
BotaoB.innerText = Perguntas[Contador].opcao[1]; // Atualiza o texto da opção B
BotaoC.innerText = Perguntas[Contador].opcao[2]; // Atualiza o texto da opção C
BotaoD.innerText = Perguntas[Contador].opcao[3]; // Atualiza o texto da opção D
RespostaCorreta.innerText = ""; // Limpa o texto da resposta correta   

    // Reseta as cores dos botões
    BotaoOpcoes.forEach(botao => {
        botao.style.backgroundColor = '';
        botao.disabled = false; // Reabilita os botões
    });

    BotaoProximo.style.display = "none"; // Esconde o botão proximo
}

// função para verificar a resposta
function verificarResposta(botaoClicado) {

    // Desabilita todos os botões assim que um, é clicado
    BotaoOpcoes.forEach(botao => {
        botao.disabled = true;
    });

    const respostaEscolhida = botaoClicado.innerText;
    const respostaCerta = Perguntas[Contador].correta;

    // Compara o texto do botão clicado com a resposta correta
    if (respostaEscolhida === respostaCerta) {
        Ponto++; // Soma os pontos
        RespostaCorreta.innerText = "Resposta correta!";
        botaoClicado.style.backgroundColor = 'green'; // A opçao correta fica verde
    } else {
        RespostaCorreta.innerText = "A resposta correta é " + respostaCerta;
        botaoClicado.style.backgroundColor = 'red'; // A opçao errada fica vermelha
    }

    BotaoProximo.style.display = ""; // Mostra o botão proximo
}

// Quando o Botão for clicado, ele chama a função verificarResposta
BotaoA.addEventListener('click', () => verificarResposta(BotaoA));
BotaoB.addEventListener('click', () => verificarResposta(BotaoB));
BotaoC.addEventListener('click', () => verificarResposta(BotaoC));
BotaoD.addEventListener('click', () => verificarResposta(BotaoD));

// Botão Próximo
BotaoProximo.addEventListener('click', () => {
    Contador++; // Avança para a próxima pergunta
    MostrarPergunta(); // Mostra a próxima pergunta
});