// Variáveis globais
var Ponto = 0; // Pontuação
var Contador = 0; // Contador

// As perguntas agora estão diretamente no JavaScript
var Perguntas = [
    { 
        "pergunta": "O que significa HTML?",
        "opcao": ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup", "High-Level Text Language"],
        "correta": "HyperText Markup Language",
    },
    { 
        "pergunta": "O que significa CSS?",
        "opcao": ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        "correta": "Cascading Style Sheets",
    },
    { 
        "pergunta": "Qual linguagem é usada para criar páginas web interativas?",
        "opcao": ["HTML", "CSS", "JavaScript", "SQL"],
        "correta": "JavaScript",
    },
    { 
        "pergunta": "Qual tag HTML é usada para criar um link?",
        "opcao": ["<link>", "<a>", "<href>", "<img>"],
        "correta": "<a>",
    },
    { 
        "pergunta": "Qual tag HTML é usada para o maior título ?",
        "opcao": ["<h1>", "<h6>", "<title>", "<head>"],
        "correta": "<h1>",
    },
    { 
        "pergunta": "Em CSS, qual propriedade muda a cor do texto?",
        "opcao": ["text-color", "color", "font-color", "text-style"],
        "correta": "color",
    },
    { 
        "pergunta": "Em CSS, qual propriedade muda a cor de fundo?",
        "opcao": ["background-color", "color", "bg-color", "background-style"],
        "correta": "background-color",
    },
    { 
        "pergunta": "Qual símbolo seleciona um elemento pelo ID no CSS?",
        "opcao": [". (ponto)", "* (asterisco)", "& (e-comercial)", "# (hashtag)"],
        "correta": "# (hashtag)",
    },
    { 
        "pergunta": "Qual símbolo seleciona elementos pela classe no CSS?",
        "opcao": [". (ponto)", "# (hashtag)", "$ (cifrão)", "> (maior que)"],
        "correta": ". (ponto)",
    },
    { 
        "pergunta": "Qual tag HTML é usada para inserir uma imagem?",
        "opcao": ["<img>", "<pic>", "<image>", "<src>"],
        "correta": "<img>",
    }
];

const PerguntaAtual = document.getElementById("H1"); // Pergunta atual ex:(Pergunta 1)
const Pergunta = document.getElementById("H2"); // Texto da pergunta ex:(O quê significa CSS?)
const RespostaCorreta = document.getElementById("H3"); // Texto da resposta correta ex:(A resposta correta é)
const BotaoA = document.getElementById("A"); // Botão opção A
const BotaoB = document.getElementById("B"); // Botão opção B
const BotaoC = document.getElementById("C"); // Botão opção C
const BotaoD = document.getElementById("D"); // Botão opção D
const BotaoProximo = document.getElementById("Proximo"); // Botão de Proximo
const BotaoOpcoes = [BotaoA, BotaoB, BotaoC, BotaoD]; // Agrupar os botões de opções

// REMOVEMOS a função BancoPerguntas() e async fetch()

// Chama a função para mostrar a primeira pergunta
MostrarPergunta();

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