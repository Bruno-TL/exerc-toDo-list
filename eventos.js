
const atualizarQuantidade = () => ( document.getElementById('numeros').innerHTML = `(${buscar().length})`);

const listaTarefas = () => ( document.getElementById('tarefas').innerHTML = 
buscar().map( tarefa => `<div>
<input type="checkbox"> ${tarefa.titulo}  
<span class="badge 
                    ${tarefa.prioridade === 'Baixa' && 'bg-primary'} 
                    ${tarefa.prioridade === 'Média' && 'bg-warning'} 
                    ${tarefa.prioridade === 'Alta' && 'bg-danger'}"
>
 ${tarefa.prioridade}
 </span></div>`).sort().join(''));
   
const addTarefa = () => {
    event.preventDefault();
    
    let titulo = document.getElementById('input_novaTarefa').value;
    let prioridade = document.getElementById('input-prioridade').value;

    if(titulo.trim() === ''){
        alert('Tarefa invalida')
        return;
    }

    if(listaTarefas().includes(titulo)){
        alert('Tarefa repetida')
        return;
    }


    salvar(titulo, prioridade);

    

    document.getElementById('input_novaTarefa').value='';
 
    atualizarQuantidade();
    listaTarefas();

}

listaTarefas();

const apagar =() => {
    document.getElementById('tarefas').innerHTML = '';
    localStorage.removeItem('tarefas')
}
