// Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//1- Pipoca – 10 segundos (padrão);
//2- Macarrão – 8 segundos (padrão);
//3- Carne – 15 segundos (padrão);
//4- Feijão – 12 segundos (padrão);
//5- Brigadeiro – 8 segundos (padrão); 

// O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
//  Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
//  não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente"; xxxxxxxxxxxx
//  Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
//  No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

let comidas  = ["Pipoca","Macarrão","Carne","Feijão","Brigadeiro"];
let tempo = [10,8,15,12,8]

    if(tempo <= 9) {
    console.log ('tempo insuficiente!')
}
else if(tempo >=30 ){
    console.log ('Kabumm');
}else if(tempo >= 20) {
    console.log ('A comida queimou')
} else {
    console.log ("Prato pronto, bom apetite")
};



if(tempo <= 7) {
    console.log ('tempo insuficiente!')
}
else if(tempo >=24 ){
    console.log ('Kabumm');
}else if(tempo >= 16) {
    console.log ('A comida queimou')
} else {
    console.log ("Prato pronto, bom apetite")
};



if(tempo <= 14) {
    console.log ('tempo insuficiente!')
}
else if(tempo >=45 ){
    console.log ('Kabumm');
}else if(tempo >= 30) {
    console.log ('A comida queimou')
} else {
    console.log ("Prato pronto, bom apetite")
};



if(tempo <= 11) {
    console.log ('tempo insuficiente!')
}
else if(tempo >=36 ){
    console.log ('Kabumm');
}else if(tempo >= 24) {
 console.log ('A comida queimou')
} else {
    console.log ("Prato pronto, bom apetite")
};



if(tempo <= 7) {
    console.log ('tempo insuficiente!')
}
else if(tempo >=24 ){
    console.log ('Kabumm');
}else if(tempo >= 16) {
    console.log ('A comida queimou')
}else {
    console.log ("Prato pronto, bom apetite")
}


console.log(comidas[0] );  tempo[0] = 10; 

console.log (comidas[1]);   tempo[1] = 18;

console.log (comidas[2]);   tempo[2] = 15;

console.log (comidas[3]);   tempo[3] = 12;

console.log (comidas[4]);   tempo[4] = 8;

console.log(comidas[5] );
//console.log (comidas);
