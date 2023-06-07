var database = require("../database/config")

function buscarClasse(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome);
    
    var instrucao = `
        SELECT idClasse from Classe where nome = "${nome}";
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function SetarPastaClasse(fkDvb, fkClasse) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkDvb, fkClasse);
    
    var instrucao = `
        INSERT INTO PastaClasse (fkDesbravadorClasse, fkClasse) VALUES 
        ('${fkDvb}', '${fkClasse}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function carregarClasse(fkDvb) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkDvb);
    
    var instrucao = `
        SELECT Desbravador.nome as nomeDvb, Classe.nome as nomeClasse FROM Desbravador JOIN PastaClasse ON idDesbravador = fkDesbravadorClasse
	        JOIN Classe ON idClasse = fkClasse
            WHERE idDesbravador = ${fkDvb};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarEspecialidade(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome);
    
    var instrucao = `
        SELECT idEspecialidade from Especialidade where nome = "${nome}";
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function SetarPastaEspecialidade(fkDvb, fkEspecialidade) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkDvb, fkEspecialidade);
    
    var instrucao = `
        INSERT INTO PastaEspecialidade (fkDesbravadorEspecialidade, fkEspecialidade) VALUES 
        ('${fkDvb}', '${fkEspecialidade}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function carregarEspecialidade(fkDvb) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkDvb);
    
    var instrucao = `
        SELECT Desbravador.nome as nomeDvb, Especialidade.nome as nomeEspecialidade, Especialidade.categoria FROM Desbravador JOIN PastaEspecialidade ON idDesbravador = fkDesbravadorEspecialidade
	        JOIN Especialidade ON idEspecialidade = fkEspecialidade
            WHERE idDesbravador = ${fkDvb};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarClasseDeletar(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome);
    
    var instrucao = `
        SELECT idClasse from Classe where nome = "${nome}";
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarEspecialidadeDeletar(nome) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome);
    
    var instrucao = `
        SELECT idEspecialidade from Especialidade where nome = "${nome}";
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function DeletarPastaClasse(fkDvb, fkClasse) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkDvb, fkClasse);
    
    var instrucao = `
        DELETE FROM PastaClasse WHERE fkDesbravadorClasse = ${fkDvb} AND fkClasse = ${fkClasse};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function DeletarPastaEspecialidade(fkDvb, fkEspecialidade) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkDvb, fkEspecialidade);
    
    var instrucao = `
        DELETE FROM PastaEspecialidade WHERE fkDesbravadorEspecialidade = ${fkDvb} AND fkEspecialidade = ${fkEspecialidade};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function CarregarKPIClasse(fkDvb) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkDvb);
    
    var instrucao = `
        SELECT COUNT(fkDesbravadorClasse) AS totalClasse FROM PastaClasse WHERE fkDesbravadorClasse = ${fkDvb};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function CarregarKPIEspecialidade(fkDvb) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkDvb);
    
    var instrucao = `
        SELECT COUNT(fkDesbravadorEspecialidade) AS totalEspecialidade FROM PastaEspecialidade WHERE fkDesbravadorEspecialidade = ${fkDvb};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function CarregarGrafico(fkDvb, categoria) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkDvb);
    
    var instrucao = `
        select count(Especialidade.nome) as quantidade from Especialidade join PastaEspecialidade on idEspecialidade = fkEspecialidade
	        join Desbravador on idDesbravador = fkDesbravadorEspecialidade
	            where categoria = "${categoria}" and fkDesbravadorEspecialidade = ${fkDvb};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    buscarClasse,
    SetarPastaClasse,
    carregarClasse,
    buscarEspecialidade,
    SetarPastaEspecialidade,
    carregarEspecialidade,
    buscarClasseDeletar,
    buscarEspecialidadeDeletar,
    DeletarPastaClasse,
    DeletarPastaEspecialidade,
    CarregarKPIClasse,
    CarregarKPIEspecialidade,
    CarregarGrafico
}