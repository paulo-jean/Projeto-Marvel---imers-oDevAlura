function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    // se o campo pesquisa for uma strinf vazia
    if (!campoPesquisa) {
        section.innerHTML = 'Digite um nome para buscar!'
        return
    }
    if (campoPesquisa == ' ') {
        section.innerHTML = 'Digite um nome para buscar!'
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = '';
    let titulo = '';
    let descricao = '';
  
    // Itera sobre cada resultado no array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
                // Cria o HTML para um resultado individual, usando template literals
            resultados += `
            <div class="item-resultado">
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Leia mais</a>
            </div>
            `;
        }
    }
    if (!resultados) {
        resultados = '<p>Nada foi encontrado!</p>'
    }
    // Insere o HTML gerado na seção selecionada
    section.innerHTML = resultados;
  }