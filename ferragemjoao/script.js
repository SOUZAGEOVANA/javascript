//MARTELO, PREGO, ALICATE, PARAFUSO
//19,90     10,00    23,00   a = 10

const precos={ //dicionario
    "parafuso":19.90,
    "martelo":23.70,
    "chave de fenda": 10.99,
    "serrote":30.00,
};

const estoque={
    "parafuso": 100,
    "martelo":4,
    "chave de fenda": 6,
    "serrote":1000,
};

//ACESSAR GUARDAR A QUANTIDAde
//calcular o preço total 
function calcularPreco(){

    let qtd = document.getElementById("quantidade").value;// pega aquantidade atual digitada 
    let escolha = document.getElementById("produto").value;//pega o nome do produto selecionado 
    let valortotal = qtd * precos[escolha] // calcular o valor total multiplicando o preço do produto pela quantidade
    //DECISAO
    //pra ve o que tem no estoque 
    if(estoque[escolha] - qtd >= 0){
        document.getElementById("resultado").innerHTML = valortotal.toFixed(2); //exibir o resultado 
        estoque[escolha] -= qtd; // calculo do estoque pra quando for tirando
        window.alert("compra realizada com sucesso "  + "valor total: " + valortotal.toFixed(2))
         
    // aparece a mensagem na tela se não tive mais nada no estoque 
    }else{
        window.alert("ESTOQUE INDISPONIVEL")
    }
    console.log(estoque[escolha]) 
  
    


    
}