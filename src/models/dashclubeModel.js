var database = require("../database/config")

function cadastrarUnidade(nome, cor, fkClube) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome);
    
    var instrucao = `
        INSERT INTO Unidade (nome, fkClube, qtd_desbravadores, cor) VALUES 
        ('${nome}', '${fkClube}', '0', '${cor}');
    `;
    var instrucao2 = `
        UPDATE Clube SET qtd_unidades = qtd_unidades + 1 WHERE idClube = ${fkClube};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    database.executar(instrucao2);
    return database.executar(instrucao);
}
function mudarUnidade(nome1, nome2, cor, fkClubeM) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome1, nome2, fkClubeM);
    
    var instrucao = `
        UPDATE Unidade SET nome = "${nome2}" WHERE fkClube = ${fkClubeM} AND nome = "${nome1}";
    `;
    var instrucao2 = `
        UPDATE Unidade SET cor = "${cor}" WHERE fkClube = ${fkClubeM} AND nome = "${nome1}";
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    database.executar(instrucao2);
    return database.executar(instrucao);
}
function convidarDesbravador(email, fkClube) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", email);

    var instrucao = `
        UPDATE Desbravador SET convite = ${fkClube} WHERE email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarUnidade(nomeUnidade, fkClube) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeUnidade, fkClube);

    var instrucao = `
        SELECT idUnidade FROM Unidade WHERE nome = '${nomeUnidade}' AND fkClube = ${fkClube};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarUnidadeAtual(nomeDesbravador, fkClube) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeDesbravador, fkClube);
    var instrucao = `
        select fkUnidade from Desbravador where nome = "${nomeDesbravador}" AND fkClubeDvb = ${fkClube}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function moverDesbravador(nomeDesbravador, fkUnidade, fkClube, idUnidade) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeDesbravador, fkUnidade, fkClube);

    var instrucao3 = `
        UPDATE Unidade SET qtd_desbravadores = qtd_desbravadores - 1 WHERE idUnidade = ${idUnidade};
    `;
    var instrucao2 = `
        UPDATE Unidade SET qtd_desbravadores = qtd_desbravadores + 1 WHERE idUnidade = ${fkUnidade}; 
    `;
    var instrucao = `
        UPDATE Desbravador SET fkUnidade = ${fkUnidade} WHERE nome = "${nomeDesbravador}" AND fkClubeDvb = ${fkClube};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    console.log("Executando a instrução SQL: \n" + instrucao3);
    console.log("Executando a instrução SQL: \n" + instrucao);
    database.executar(instrucao2);
    database.executar(instrucao3);
    return database.executar(instrucao);
}
function moverDesbravadorZero(nomeDesbravador, fkUnidade, fkClube) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeDesbravador, fkUnidade, fkClube);
    var instrucao2 = `
        UPDATE Unidade SET qtd_desbravadores = qtd_desbravadores + 1 WHERE idUnidade = ${fkUnidade}; 
    `;
    var instrucao = `
        UPDATE Desbravador SET fkUnidade = ${fkUnidade} WHERE nome = "${nomeDesbravador}" AND fkClubeDvb = ${fkClube};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao2);
    console.log("Executando a instrução SQL: \n" + instrucao);
    database.executar(instrucao2);
    return database.executar(instrucao);
}
function informacaoDesbravador(nome, fkClube) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, fkClube);

    var instrucao = `
        SELECT nome, email, cpf, dtNasc FROM Desbravador WHERE nome = '${nome}' AND fkClubeDvb = ${fkClube};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function deletarUnidade(nome, fkClube) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome);

    var instrucao = `
        DELETE FROM unidade WHERE nome = "${nome}" AND fkClube = ${fkClube};
    `;
    var instrucao2 = `
        UPDATE Clube SET qtd_unidades = qtd_unidades - 1 WHERE idClube = ${fkClube};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    database.executar(instrucao2);
    return database.executar(instrucao);
}
// function carregarUnidade() {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    
//     var instrucao = `
//         SELECT * FROM Unidade;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }
function carregarUnidade(fkClube) {
    var instrucao = `
        SELECT * FROM Unidade WHERE fkClube = '${fkClube}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function carregarClube(fkClubeDados) {
    var instrucao = `
        SELECT * FROM Clube WHERE idClube = '${fkClubeDados}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function CarregarDados(fkClubeDados) {
    var instrucao = `
        SELECT c.qtd_desbravadores as qtd_dvb_clu, qtd_unidades, u.nome, u.qtd_desbravadores as qtd_dvb_uni, u.cor
        FROM Clube as c JOIN Unidade as u ON idClube = fkClube WHERE idClube = '${fkClubeDados}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function CarregarDesbravador(fkClube) {
    var instrucao = `
        SELECT Desbravador.nome as nome, Unidade.nome as nomeUnidade, Desbravador.fkUnidade FROM Desbravador LEFT JOIN Unidade ON fkUnidade = idUnidade WHERE fkClubeDvb = '${fkClube}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarUnidade,
    mudarUnidade,
    convidarDesbravador,
    deletarUnidade,
    buscarUnidade,
    buscarUnidadeAtual,
    moverDesbravador,
    moverDesbravadorZero,
    informacaoDesbravador,
    carregarUnidade,
    carregarClube,
    CarregarDados,
    CarregarDesbravador
}