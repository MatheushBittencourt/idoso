// Array de objetos representando as clínicas
var clinicas = [
    {
        nome: "Superarsi",
        endereco: "R. Alexandre Schlemm, 300 - Bucarein, Joinville - SC, 89202-417",
        telefone: "(47) 3026-2395",
        site: "http://www.superarsi.com.br/",
        imagem: "/static/images/clinicas/superarsi.png"
    },
    {
        nome: "CLINICA MÉDICA MANDELLI",
        endereco: "R. Eleutéria Maria Eusébia Caetano, 390 - Pioneiros, Balneário Camboriú - SC, 88331-030",
        telefone: " (47) 3367-0225",
        site: "http://www.clinicaemagrecimento.com.br/",
        imagem: "/static/images/clinicas/mandelli.png"
    },
    {
        nome: "Instituto Neurogenese",
        endereco: "Av. do Estado Dalmo Vieira, 1771 - sala 36 - Pioneiros, Balneário Camboriú - SC, 88331-070",
        telefone: "(47) 98921-4000",
        site: "http://institutoneurogenese.com/",
        imagem: "/static/images/clinicas/neurogenese.png"
    },
    {
        nome: "Clínica Lineage",
        endereco: "R. Arthur Max Doose, 183 - sala 2301 - Pioneiros, Balneário Camboriú - SC, 88331-085",
        telefone: "(47) 99708-4455",
        site: "https://instagram.com/lineageclinica?utm_medium=copy_link",
        imagem: "/static/images/clinicas/lineage.png"
    },
    {
        nome: "Allmah Clínica",
        endereco: "R. 1301, 471 - sala 604 - Centro, Balneário Camboriú - SC, 88330-795",
        telefone: "(47) 98881-7409",
        site: "http://institutoallmah.com.br/",
        imagem: "/static/images/clinicas/allmah.png"
    },
    {
        nome: "Clínica Digest Care",
        endereco: "Av. do Estado Dalmo Vieira, 1535 - Sala 03 - Pioneiros, Balneário Camboriú - SC, 88331-150",
        telefone: "(47) 3081-2200",
        site: "https://digestcare.com.br/",
        imagem: "/static/images/clinicas/digest.png"
    },
    {
        nome: "Reviver Clínica da Saude",
        endereco: "R. Ricardo Landmann, 85/97 - Santo Antônio, Joinville - SC, 89218-200",
        telefone: "(47) 99943-0586",
        site: "http://clinicareviversaude.com.br/",
        imagem: "/static/images/clinicas/reviver.png"
    },
    {
        nome: "Clínica Saúde Mental",
        endereco: "R. Blumenau, 178 - Sala 710 - Centro, Joinville - SC, 89204-248",
        telefone: "(47) 99227-8910",
        site: "https://clinicasaudementaljlle.com.br/",
        imagem: "/static/images/clinicas/mental.png"
    },
    {
        nome: "Clínica Psiquiátrica Porto Seguro",
        endereco: " R. Dr. Plácido Gomes, 534 - Anita Garibaldi, Joinville - SC, 89202-050",
        telefone: "(47) 3017-3227",
        site: "http://www.clinica2.com",
        imagem: "/static/images/clinicas/porto.png"
    }

];

function adicionarCardsClinicas() {
    var container = document.getElementById("clinicas-container");

    container.innerHTML = '';

    clinicas.forEach(function (clinica) {
        var card = document.createElement("div");
        card.className = "col-md-4 mb-4";
        card.innerHTML = `
            <div class="card">
                <img src="${clinica.imagem}" class="card-img-top imagem-clinica" alt="Imagem da ${clinica.nome}">
                <div class="card-body">
                    <h5 class="card-title">${clinica.nome}</h5>
                    <p class="card-text">${clinica.endereco}<br>${clinica.telefone}</p>
                    <a href="${clinica.site}" target="_blank" class="btn btn-primary bg-primary w-100">Visitar site</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

window.onload = adicionarCardsClinicas;
