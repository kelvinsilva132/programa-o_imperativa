const  pessoa  =  [
    {
        altura : 1,22 ,
        sexo : "F"
    } ,
    {
        altura : 1,88 ,
        sexo : "M"
    } ,
    {
        altura : 1,62 ,
        sexo : "F"
    } ,
    {
        altura : 1,47 ,
        sexo : "F"
    } ,
    {
        altura : 1,41 ,
        sexo : "M"
    } ,
    {
        altura : 1,63 ,
        sexo : "M"
    } ,
    {
        altura : 1,62 ,
        sexo : "F"
    } ,
    {
        altura : 1,65 ,
        sexo : "F"
    } ,
    {
        altura : 1,51 ,
        sexo : "F"
    } ,
    {
        altura : 1,63 ,
        sexo : "M"
    } ,
    {
        altura : 1,52 ,
        sexo : "F"
    } ,
    {
        altura : 1,92 ,
        sexo : "F"
    } ,
    {
        altura : 1,41 ,
        sexo : "F"
    } ,
    {
        altura : 1,63 ,
        sexo : "F"
    } ,
    {
        altura : 1,79 ,
        sexo : "M"
    } ,
] ;

função  maxMin ( h ) {
    deixe  maior = 0 ,  menor = 5 ;
    deixe  QuantidadeHomens  =  0 ;
    deixe  quantidadeMulheres  =  0 ;
    deixe  somaMulheres  =  0 ;
    for ( deixe  x = 0 ; x < h . comprimento ; x ++ ) {
        if  ( h [ x ] . altura > maior ) {
            maior  =  h [ x ] . altura ;
        } else  if ( h [ x ] . altura < menor ) {
            menor  =  h [ x ] . altura ;
        }
        if  ( h [ x ] . sexo  ==  "M" )  {
            quantidade Homens ++
        }
        senão  {
            quantidadeMulheres ++
            somaMulheres  =  somaMulheres  +  h [ x ] . altura 
        }

    }
    consola . log ( "A maior altura é" +  maior + "ea menor é" + menor ) ;
    consola . log ( "A quantidade de homens é de"  +  quantidade Homens ) ;
    consola . log ( "A média da altura das mulheres é de "  +  somaMulheres / quantidadeMulheres )
}
maxMin ( pessoa )
// parte II


const  espectadores  =  [
    {
        idade :   25 ,
        opinião : "BOM"
    } ,
    {
        idade :   21 ,
        opinião : "ÓTIMO"
    } ,
    {
        idade :   30 ,
        opinião : "REGULAR"
    } ,
    {
        idade :   28 ,
        opinião : "REGULAR"
    } ,
    {
        idade :   18 ,
        opinião : "BOM"
    } ,
    {
        idade :   22 ,
        opinião : "BOM"
    } ,
    {
        idade :   27 ,
        opinião : "BOM"
    } ,
    {
        idade :   24 ,
        opinião : "ÓTIMO"
    } ,
    {
        idade :   52 ,
        opinião : "REGULAR"
    } ,
    {
        idade :   35 ,
        opinião : "REGULAR"
    } ,
    {
        idade :   32 ,
        opinião : "BOM"
    } ,
    {
        idade :   21 ,
        opinião : "ÓTIMO"
    } ,
    {
        idade :   27 ,
        opinião : "REGULAR"
    } ,
    {
        idade :   22 ,
        opinião : "REGULAR"
    } ,
    {
        idade :   35 ,
        opinião : "BOM"
    } ,
] ;
deixe  mídia  =  0 ;
deixe  quantidadeOtimo  =  0 ;
    deixe  quantidade Regular  = 0 ;
    deixe  quantidade Bom =  0 ;
for  ( i  =  0 ;  i  < espectadores . comprimento ;  i ++ )  {
    
    if  ( espectadores [ i ] . opiniao  ===  "ÓTIMO" )  {
    quantidadeOtimo ++
    mídia  =  espectadores [ i ] . idade  +  mídia
    }
    else  if  ( espectadores [ i ] . opiniao  ==  "REGULAR" )  {
        quantidade normal ++
    }
    senão  {
        Quantidade Bom ++
    }

}
consola . log ( media / quantidade Otimo )
consola . log ( quantidade Regular )
consola . log ( quantidade ( Bom * 100 ) / espectadores . comprimento )
