let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('nome-amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); // Corrigido: adiciona ao array
    exibirListaAmigos(); // Atualiza a lista na tela
    input.value = "";
}

function exibirListaAmigos() {
    const lista = document.getElementById('lista-amigos');
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo cadastrado.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    alert(`Amigo sorteado: ${amigos[indiceAleatorio]}`);
}