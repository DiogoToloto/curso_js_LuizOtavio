const botao = document.getElementById('botao');

botao.addEventListener('click', function() {
    
    let inputTarefa = document.getElementById('tarefas')
    let texto = String(inputTarefa.value)


    let tarefas = `${texto}`

    setTarefas(tarefas)

    inputTarefa.value = ''
})

function criaUl() {
    const ul = document.createElement('ul');
    return ul;
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function apagar() {
    const botao = document.createElement('button')
    botao.name = 'Apagar'
    
    botao.addEventListener('click', function() {

    })

    
}

function setTarefas(texto) {
    const container = document.querySelector('.container')
    const ul = criaUl();
    const li = criaLi();
    const botao = apagar();

    li.innerHTML = texto;
    li.innerHTML

    container.appendChild(ul);
    ul.appendChild(li);
}