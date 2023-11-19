const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
const apiUrl = 'https://parallelum.com.br/fipe/api/v2/';
const vehicleType = 'cars'; // Corrigido para 'cars' conforme o endpoint fornecido
let marcaId, modeloId;

// Função para preencher o select de marcas
function fillMarcasSelect(marcas) {
    const marcasSelect = document.getElementById('marcas');
    marcasSelect.innerHTML = '<option value="" selected disabled>Escolha uma marca</option>';
    marcas.forEach(marca => {
        const option = document.createElement('option');
        option.value = marca.code;
        option.textContent = marca.name;
        marcasSelect.appendChild(option);
    });
}

// Função para preencher o select de modelos
function fillModelosSelect(modelos) {
    const modelosSelect = document.getElementById('modelos');
    modelosSelect.innerHTML = '<option value="" selected disabled>Escolha um modelo</option>';
    modelos.forEach(modelo => {
        const option = document.createElement('option');
        option.value = modelo.code;
        option.textContent = modelo.name;
        modelosSelect.appendChild(option);
    });
    modelosSelect.disabled = false; // Habilita o select de modelos
}

// Função para preencher o select de anos
function fillAnosSelect(anos) {
    const anosSelect = document.getElementById('anos');
    anosSelect.innerHTML = '<option value="" selected disabled>Escolha um ano</option>';
    anos.forEach(ano => {
        const option = document.createElement('option');
        option.value = ano.code;
        option.textContent = ano.name;
        anosSelect.appendChild(option);
    });
    anosSelect.disabled = false; // Habilita o select de anos
}

// Função para exibir o valor na UI
function showValor(valor) {
    const valorDisplay = document.getElementById('valor-display');
    valorDisplay.innerHTML = `<h2>Valor:</h2> ${valor}`;
}

// Função para buscar as marcas na API
function fetchMarcas() {
    fetch(`${apiUrl}${vehicleType}/brands`)
        .then(response => response.json())
        .then(data => fillMarcasSelect(data))
        .catch(error => console.error('Erro ao obter marcas:', error));
}

// Função para buscar os modelos na API com base na marca selecionada
function fetchModelos() {
    marcaId = document.getElementById('marcas').value;
    fetch(`${apiUrl}${vehicleType}/brands/${marcaId}/models`)
        .then(response => response.json())
        .then(data => fillModelosSelect(data))
        .catch(error => console.error('Erro ao obter modelos:', error));
}

// Função para buscar os anos na API com base na marca e modelos selecionados
function fetchAno() {
    marcaId = document.getElementById('marcas').value;
    modeloId = document.getElementById('modelos').value;
    fetch(`${apiUrl}${vehicleType}/brands/${marcaId}/models/${modeloId}/years`)
        .then(response => response.json())
        .then(data => fillAnosSelect(data))
        .catch(error => console.error('Erro ao obter os anos:', error));
}

// Função para buscar o valor na API com base na marca e modelo selecionados
function fetchValor() {
    marcaId = document.getElementById('marcas').value;
    modeloId = document.getElementById('modelos').value;
    anoId = document.getElementById('anos').value;
    fetch(`${apiUrl}${vehicleType}/brands/${marcaId}/models/${modeloId}/years/${anoId}`)
        .then(response => response.json())
        .then(data => showValor(data.price))
        .catch(error => console.error('Erro ao obter valor:', error));
}

// Inicializar a página
fetchMarcas();





let idx = 0;
/*funcionamento do slider*/
function carrosel(){

    idx++;


    if(idx > img.length - 1){
        idx = 0; /*caso a variavel seja maior q a largura da imagem,reinicia o loop*/
    }

    imgs.style.transform = `translateX(${-idx * 1300}px)`;

}

setInterval(carrosel, 3800);/* intervalo entre imagens*/