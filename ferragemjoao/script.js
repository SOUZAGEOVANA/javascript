// Dados do estoque inicial
const estoque = {
    parafuso: 100,
    martelo: 50,
    "chave de fenda": 75,
    serrote: 30,
};

// Elementos do DOM
const produtoSelect = document.getElementById("produto");
const quantidadeInput = document.getElementById("quantidade");
const comprarButton = document.getElementById("comprar");
const resultadoElement = document.getElementById("resultado");

// Função para realizar a compra
function realizarCompra() {
    const produtoSelecionado = produtoSelect.value;
    const quantidadeDesejada = parseInt(quantidadeInput.value, 10);

    // Validações
    if (!produtoSelecionado) {
        resultadoElement.textContent = "Por favor, selecione um produto.";
        resultadoElement.style.color = "red";
        return;
    }

    if (isNaN(quantidadeDesejada) || quantidadeDesejada <= 0) {
        resultadoElement.textContent = "Por favor, insira uma quantidade válida.";
        resultadoElement.style.color = "red";
        return;
    }

    // Verifica o estoque
    if (quantidadeDesejada > estoque[produtoSelecionado]) {
        resultadoElement.textContent = `Estoque insuficiente! Temos apenas ${estoque[produtoSelecionado]} unidades de ${produtoSelecionado}.`;
        resultadoElement.style.color = "red";
        return;
    }

    // Atualiza o estoque e exibe o sucesso
    estoque[produtoSelecionado] -= quantidadeDesejada;
    resultadoElement.textContent = `Compra realizada com sucesso! Restam ${estoque[produtoSelecionado]} unidades de ${produtoSelecionado}.`;
    resultadoElement.style.color = "green";
}

// Adiciona o evento ao botão
comprarButton.addEventListener("click", realizarCompra);
