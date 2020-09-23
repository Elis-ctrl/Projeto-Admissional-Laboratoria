
function startFunction()
{
    let name=prompt("Nos informe o seu nome completo:");

    let x;

    x="Bem vindo(a)," + name + "!!!";
    document.getElementById("start").innerHTML+=x;
    
    
    let questionOne=prompt("Questão Um: Considere a série de números: 72, 14, 66, 22, 60,… Qual é o próximo número? \n 1. 20 \n 2. 30 \n 3. 40 \n (insira o numero correspondente a resposta)");
 
    let questionTwo=prompt("Questão Dois: Considere a série de números: 23, 24, 27, 28, 31, 32,… Qual é o próximo número? \n 1. 25 \n 2. 35 \n 3. 45 \n (insira o numero correspondente a resposta)");

    let questionThree=prompt("Questão Três: ELFU, GLHU, ILJU,_____, MLNU? \n 1. ILJU \n 2. KLLU \n 3. GLIU \n (insira o numero correspondente a resposta)");

    if (questionOne==2) {
        
        document.getElementById("rightAnswer").innerHTML+="Questão 1: 30 <br>";

    }
    else  {

        document.getElementById("wrongAnswer").innerHTML+="Questão 1: A resposta correta é 30 <br>";

    }
    if (questionTwo==2) {

        document.getElementById("rightAnswer").innerHTML+= "Questão 2: 35 <br>";

    }
    else {

        document.getElementById("wrongAnswer").innerHTML+="Questão 2: A resposta correta é 35 <br>";

    }if (questionThree==2) {

        document.getElementById("rightAnswer").innerHTML+="Questão 3: KLLU";

    }
    else {

        document.getElementById("wrongAnswer").innerHTML+="Questão 3: A resposta correta é KLLU"

    }
}

function finishFunction()
{
    alert("Até a próxima!!");
    document.getElementById("finish").innerHTML+="Obrigada";
}




