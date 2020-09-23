function startFunction()
{ 
    let name = prompt("Coloque o seu nome:");
    if(name !== ''){
        window.location.href = "confirmacao.html";  
    }   
}
//     var span = document.getElementById('name');
//     span.innerHTML = name;
    
//    
// }

// function redirectPage(){
//  
// }

// function finishFunction()
// {
//     alert("Até a próxima!!");
//     document.getElementById("finish").innerHTML=x;
// }
// if (questionOne==30) {
    
// }

function questionario(){
    let nome = prompt("Coloque o seu nome:");
    if(nome !== ''){
        let span = document.getElementById('name');
        span.innerHTML = nome;
    let questionOne=prompt("1) Considere a série de números: 72, 14, 66, 22, 60,… Qual é o próximo número? (insira o numero equivalente a resposta)");
    console.log(questionOne)
        if(questionOne == 14){
            let r1 = document.getElementById('resposta1correta');
            r1.innerHTML = 'Resposta 1';
        }else {
            let r1 = document.getElementById('resposta1errada');
            r1.innerHTML = 'Resposta 1';
        }

    let questionTwo=prompt("2) Considere a série de números: 23, 24, 27, 28, 31, 32,… Qual é o próximo número?(insira o numero equivalente a resposta)");
    if(questionTwo == 24){
        let r2 = document.getElementById('resposta2correta');
        r2.innerHTML = 'Resposta 2';
    }else {
        let r2 = document.getElementById('resposta2errada');
        r2.innerHTML = 'Resposta 2';
    }

    let questionThree=prompt("3) ELFU, GLHU, ILJU,_____, MLNU?(insira as letras equivalente a resposta)");
    if(questionThree == 'GLHU'){
        let r3 = document.getElementById('resposta3correta');
        r3.innerHTML = 'Resposta 3';
    }else {
        let r3 = document.getElementById('resposta3errada');
        r3.innerHTML = 'Resposta 3';
    }
    }   
}





