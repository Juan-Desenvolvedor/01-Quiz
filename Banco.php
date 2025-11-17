<?php
// Bancos de perguntas
$Perguntas = [
    [ 
        "pergunta" => "O que significa HTML?",
        "opcao" => ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup", "High-Level Text Language"],
        "correta" => "HyperText Markup Language",
    ],
    [ 
        "pergunta" => "O que significa CSS?",
        "opcao" => ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        "correta" => "Cascading Style Sheets",
    ],
    [ 
        "pergunta" => "Qual linguagem define o *comportamento* de uma página web?",
        "opcao" => ["HTML", "CSS", "JavaScript", "SQL"],
        "correta" => "JavaScript",
    ],
    [ 
        "pergunta" => "Qual tag HTML é usada para criar um link?",
        "opcao" => ["<link>", "<a>", "<href>", "<img>"],
        "correta" => "<a>",
    ],
    [ 
        "pergunta" => "Qual tag HTML é usada para o maior título ?",
        "opcao" => ["<h1>", "<h6>", "<title>", "<head>"],
        "correta" => "<h1>",
    ],
    [ 
        "pergunta" => "Em CSS, qual propriedade muda a cor do texto?",
        "opcao" => ["text-color", "color", "font-color", "text-style"],
        "correta" => "color",
    ],
    [ 
        "pergunta" => "Em CSS, qual propriedade muda a cor de fundo?",
        "opcao" => ["background-color", "color", "bg-color", "background-style"],
        "correta" => "background-color",
    ],
    [ 
        "pergunta" => "Qual símbolo seleciona um elemento pelo ID no CSS?",
        "opcao" => [". (ponto)", "* (asterisco)", "& (e-comercial)", "# (hashtag)"],
        "correta" => "# (hashtag)",
    ],
    [ 
        "pergunta" => "Qual símbolo seleciona elementos pela classe no CSS?",
        "opcao" => [". (ponto)", "# (hashtag)", "$ (cifrão)", "> (maior que)"],
        "correta" => ". (ponto)",
    ],
    [ 
        "pergunta" => "Qual tag HTML é usada para inserir uma imagem?",
        "opcao" => ["<img>", "<pic>", "<image>", "<src>"],
        "correta" => "<img>",
    ]
];

// Imprime as perguntas
echo json_encode($Perguntas);
?>