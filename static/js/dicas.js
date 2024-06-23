var dicas1 = [
    {
        dica: "Dica 1: Manter uma rotina consistente",
        descricao: "Estabelecer uma rotina diária previsível e consistente para o idoso com Alzheimer é muito importante. Isso pode ajudar a reduzir a ansiedade e a confusão, fornecendo uma sensação de segurança e estabilidade. Além disso, cria uma sensação de liberdade maior já que as coisas não mudam com frequência e ele sente que pode fazer as coisas sozinho.",
    },
    {
        dica: "Dica 2: Estimule a memória",
        descricao: "Como já sabemos, a memória é uma parte do cérebro que pode ficar bem danificada com a doença. Dessa forma, se você convive com um idoso com Alzheimer, pode usar fotos, álbuns de família e objetos familiares para ajudar o idoso a lembrar de pessoas e eventos importantes. Isso pode estimular a memória e promover momentos de conexão emocional.",
    }
];
var dicas2 = [
    {
        dica: "Dica 3: Promova a segurança",
        descricao: "Dependendo do grau da doença e intensidade dos sintomas pode ser preciso fazer alguns ajustes no ambiente. Isso ajuda a garantir a segurança do idoso. Remova objetos perigosos, instale trancas em portas e janelas, e coloque etiquetas em armários e gavetas para facilitar a identificação.",
    },
    {
        dica: "Dica 4: Seja paciente",
        descricao: "A empatia é uma palavra que faz diferença na vida do idoso com Alzheimer. Lembre-se de que ele pode ter dificuldades de memória e compreensão. Seja paciente e evite criticar ou corrigir constantemente. Demonstre empatia e ofereça apoio emocional. Se ele precisar ou pedir, solicite ajuda, mas nunca faça por ele ou diga frases como: já que você não consegue, eu faço.”",
    }
];
var dicas3 = [
    {
        dica: "Dica 5: Forneça orientações claras",
        descricao: "Sempre que você precisar que um idoso com Alzheimer faça alguma tarefa, use instruções simples e diretas ao se comunicar com ele. Evite perguntas complexas ou ambíguas, pois isso pode causar confusão. Se preciso, dê exemplos e ajude a raciocinar, sem tirar a autonomia.",
    },
    {
        dica: "Dica 6: Mantenha a socialização",
        descricao: "Nunca exclua o idoso! Encoraje-o a se envolver em atividades sociais, como visitas de familiares e amigos, grupos de apoio ou programas de atividades para idosos. A interação social pode ser benéfica para o bem-estar emocional e cognitivo.",
    }
];
var dicas4 = [
    {
        dica: "Dica 7: Busque suporte profissional",
        descricao: "Se for preciso, solicite ajuda de profissionais de saúde especializados em cuidados com idosos com Alzheimer. Eles podem oferecer orientação, recursos e apoio para lidar com os desafios específicos da doença.",
    },
    {
        dica: "Dica 8: Cuide dos medicamentos",
        descricao: "Se responsabilize pelos medicamentos para evitar esquecimentos ou o uso excessivo. Faça uma lista de todos os remédios e um esquema de horários e dosagens para facilitar o seu controle. Você pode optar por dissolver a medicação em alimentos ou bebidas para ajudar na sua ingestão, mas sempre consulte primeiro um profissional de saúde."
    }
];

function adicionarCardsDicas() {
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    var container3 = document.getElementById("container3");
    var container4 = document.getElementById("container4");

    container1.innerHTML = '';

    dicas1.forEach(function (dica) {
        var card = document.createElement("div");
        card.className = "col-15 mb-3";
        card.innerHTML = `
            <div class="card shadow">
                <div class="card-body">
                    <h5 class="card-title" id="card-tittle">${dica.dica}</h5>
                    <p class="card-text">${dica.descricao}</p>
                </div>
            </div>
        `;
        container1.appendChild(card);
    });
    dicas2.forEach(function (dica) {
        var card = document.createElement("div");
        card.className = "col-15 mb-3";
        card.innerHTML = `
            <div class="card shadow">
                <div class="card-body">
                    <h5 class="card-title" id="card-tittle">${dica.dica}</h5>
                    <p class="card-text">${dica.descricao}</p>
                </div>
            </div>
        `;
        container2.appendChild(card);
    });
    dicas3.forEach(function (dica) {
        var card = document.createElement("div");
        card.className = "col-15 mb-3";
        card.innerHTML = `
            <div class="card shadow">
                <div class="card-body">
                    <h5 class="card-title" id="card-tittle">${dica.dica}</h5>
                    <p class="card-text">${dica.descricao}</p>
                </div>
            </div>
        `;
        container3.appendChild(card);
    });
    dicas4.forEach(function (dica) {
        var card = document.createElement("div");
        card.className = "col-15 mb-3";
        card.innerHTML = `
            <div class="card shadow">
                <div class="card-body">
                    <h5 class="card-title" id="card-tittle">${dica.dica}</h5>
                    <p class="card-text">${dica.descricao}</p>
                </div>
            </div>
        `;
        container4.appendChild(card);
    });
}

window.onload = adicionarCardsDicas;
