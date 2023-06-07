var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.dtHora,
            a.fkDesbravadorAviso,
            a.fkClubeAviso,
            u.idDesbravador AS idUsuario,
            u.nome,
            u.email,
            u.senha,
            c.idClube AS idUsuarioClube,
            c.nome as nomeClube,
            c.email,
            c.senha
        FROM aviso a
            LEFT JOIN Desbravador u
                ON a.fkDesbravadorAviso = u.idDesbravador
            LEFT JOIN Clube c
                ON a.fkClubeAviso = c.idClube
            ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucao = `
        SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.fkDesbravadorAviso,
            u.idDesbravador AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM aviso a
            INNER JOIN Desbravador u
                ON a.fkDesbravadorAviso = u.idDesbravador
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
        SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.fkDesbravadorAviso,
            u.idDesbravador AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM aviso a
            INNER JOIN Desbravador u
                ON a.fkDesbravadorAviso = u.idDesbravador
        WHERE u.id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function publicar(titulo, descricao, idUsuario, idClube) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucao = `
        INSERT INTO aviso (titulo, descricao, fkDesbravadorAviso, fkClubeAviso) VALUES ('${titulo}', '${descricao}', ${idUsuario}, '${idClube}');
    `;
    var instrucao2 = `
        UPDATE Desbravador SET notificação = notificação + 1 WHERE fkClubeDvb = ${idClube};
    `;
    var instrucao3 = `
        UPDATE Clube SET notificação = notificação + 1 WHERE idClube = ${idClube};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    database.executar(instrucao2);
    database.executar(instrucao3);
    return database.executar(instrucao);
}
function publicarClube(titulo, descricao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucao = `
        INSERT INTO aviso (titulo, descricao, fkClubeAviso) VALUES ('${titulo}', '${descricao}', ${idUsuario});
    `;
    var instrucao2 = `
        UPDATE Desbravador SET notificação = notificação + 1 WHERE fkClubeDvb = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    database.executar(instrucao2);
    return database.executar(instrucao);
}
function editar(novaDescricao, idAviso) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idAviso);
    var instrucao = `
        UPDATE aviso SET descricao = '${novaDescricao}' WHERE id = ${idAviso};
    `;
    var instrucao2 = `
        UPDATE aviso SET dtHora = now() WHERE id = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    database.executar(instrucao2);
    return database.executar(instrucao);
}
function deletar(idAviso) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAviso);
    var instrucao = `
        DELETE FROM aviso WHERE id = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function CarregarJoinConvite(convite) {
    var instrucao = `
        SELECT Clube.nome FROM Desbravador JOIN Clube ON idClube = ${convite};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function Aceitar(convite, email) {
    var instrucao = `
        UPDATE Desbravador SET fkClubeDvb = ${convite} WHERE email = '${email}';
    `;
    var instrucao2 = `
        UPDATE Desbravador SET convite = 0 WHERE email = '${email}';
    `;
    var instrucao3 = `
        UPDATE Clube SET qtd_desbravadores = qtd_desbravadores + 1 WHERE idClube = '${convite}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    database.executar(instrucao2);
    database.executar(instrucao3);
    return database.executar(instrucao);
}
function Recusar(email) {
    var instrucao = `
        UPDATE Desbravador SET convite = 0 WHERE email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function CarregarEndereco(fkEnd) {
    var instrucao = `
        SELECT * FROM Endereço where idEndereço = ${fkEnd};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function atualizarNotificacaoClube(idClube) {
    var instrucao = `
        UPDATE Clube SET notificação = 0 WHERE idClube = '${idClube}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function atualizarNotificacaoDesbravador(idDesbravador) {
    var instrucao = `
        UPDATE Desbravador SET notificação = 0 WHERE idDesbravador = '${idDesbravador}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function VerificarNotificacaoClube(idClube) {
    var instrucao = `
        SELECT notificação from Clube where idClube = ${idClube};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function VerificarNotificacaoDesbravador(idDesbravador) {
    var instrucao = `
        SELECT notificação from Desbravador where idDesbravador = ${idDesbravador};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function updateLenco(idDesbravador) {
    var instrucao = `
        UPDATE Desbravador SET Nível_Lenço = "L" WHERE idDesbravador = ${idDesbravador};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    publicarClube,
    editar,
    deletar,
    CarregarJoinConvite,
    Aceitar,
    Recusar,
    CarregarEndereco,
    atualizarNotificacaoClube,
    atualizarNotificacaoDesbravador,
    VerificarNotificacaoClube,
    VerificarNotificacaoDesbravador,
    updateLenco
}