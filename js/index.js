const mensagens = [
    "🔍 Procurando motivo para abrir o WhatsApp...",
    "💬 Analisando conversas...",
    "🧪 Verificando teorias...",
    "📊 Comparando hipóteses...",
    "😊 Detectando sorrisos involuntários..."
];

const container = document.getElementById("tasks");

mensagens.forEach((mensagem, index) => {

    setTimeout(() => {

        const linha = document.createElement("div");

        linha.classList.add("task");

        linha.innerHTML = `✓ ${mensagem}`;

        container.appendChild(linha);

    }, index * 1000);

});