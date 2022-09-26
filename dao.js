let lista_tarefas = [];

function buscar() {
    return JSON.parse(localStorage.getItem('tarefas') || '[]');
}

function salvar(titulo, prioridade) {
    let dados = buscar();


    dados.push({
        titulo: titulo,
        prioridade: prioridade,
    })


    localStorage.setItem('tarefas', JSON.stringify(dados))
    
}

