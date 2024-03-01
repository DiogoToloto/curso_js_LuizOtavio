const inputNovaTarefa = document.querySelector('.inputNovaTarefa');
const botao = document.querySelector('.btn_add_tarefa');
const tarefas = document.querySelector('.tarefas');


botao.addEventListener('click', function() {
    if (!inputNovaTarefa.value) return;
    
    criaTarefa(inputNovaTarefa.value)

    inputNovaTarefa.value = '';
})

inputNovaTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if (!inputNovaTarefa.value) return;
        criaTarefa(inputNovaTarefa.value);
    }
})

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if(el.classList.contains('Apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'Apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar);
}

function limpaInput() {
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLi();

    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas();