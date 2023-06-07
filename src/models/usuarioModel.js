var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Desbravador;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrarDesbravador(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM Desbravador WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrarClube(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM Clube WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
// function cadastrarDesbravador(nome, email, senha, cpf, nasc, lenço, cargo, clube, unidade, end, lider) {
function cadastrarDesbravador(nome, email, senha, cpf, nasc, lenço, cargo, end, lider) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // var instrucao = `
    //     INSERT INTO Desbravador (nome, email, senha, cpf, dtNasc, Nível_Lenço, cargo, fkClubeDvb, fkUnidade, fkEndDvb, fkLíder) VALUES 
    //     ('${nome}', '${email}', '${senha}', '${cpf}', '${nasc}', '${lenço}', '${cargo}', '${clube}', '${unidade}', '${end}', '${lider}');
    // `;
    var instrucao = `
        INSERT INTO Desbravador (nome, email, senha, cpf, dtNasc, Nível_Lenço, cargo, notificação, fkEndDvb, fkLíder) VALUES 
            ('${nome}', '${email}', '${senha}', '${cpf}', '${nasc}', '${lenço}', '${cargo}', 0, '${end}', '${lider}');
     `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarClube(nome, email, senha, fund, regiao, associacao, end, qtd_desbravadores, qtd_unidades) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    var instrucao = `
        INSERT INTO Clube (nome, email, senha, dtFundação, região, associação, fkEndClube, qtd_desbravadores, qtd_unidades, notificação) VALUES 
        ('${nome}', '${email}', '${senha}', '${fund}', '${regiao}', '${associacao}', '${end}', '${qtd_desbravadores}', '${qtd_unidades}', 0);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrarDesbravador,
    entrarClube,
    cadastrarDesbravador,
    cadastrarClube,
    listar,
};