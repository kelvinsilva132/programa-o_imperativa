//condicionais if("")&&

 //let dia = "Domingo";

//if(dia == "Domingo"){
//    console.log("vou para praia!");}

//--------------////---------------///

//let dia = "quarta";

//     if(dia == "Domingo"){
//     console.log("vou para praia!"); 
//      }   
//'O codigo não faria nada pois o dia não é domingo'


//let dia = "quarta"; //*si o dia for domingo

    //if(dia == "Domingo"){
   //console.log("vou para praia!");
     // *si não for domingo
   //}else {
//}


///let dia = "sexta"; //*si o dia for sexta

//if(dia == "Domingo"){
  //  console.log("vou para praia!");
//}else if(dia == 'sexta'){ //*si for sexta vou ao cinema
//console.log("vou para o cinema!")
//}
//*si não for domingo
// else {
//console.log("Fico em casa!");
//}


//--------------------------------/////=-----------

//if ternario

//let mes = "fevereriro";

//let resultado = mes == "abril"? "vou a paris":"nao vou a paris";

//console.log(resultado);

//switch
let ano = "2005"; //o ano é 2002

let resultado = ano == "2002"? "vou a paris":"nao vou a paris"; //si for 2002 
switch(ano){
    case "2002":
        console.log("vou sair de casa");
        break;

        case "2003": //si nao for 2002 
            console.log("fico em casa");
         break;
     ///case "2006":
    ///console.log("");. 
    //  break;----implementa o que devera ser feito
         default:
            console.log("Eu fico quieto!");//si não for nenhum dos dias 
}