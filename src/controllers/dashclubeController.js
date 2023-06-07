var dashclubeModel = require("../models/dashclubeModel");

function cadastrarUnidade(req, res) {
    var nome = req.body.nomeServer;
    var cor = req.body.corServer;
    var fkClube = req.body.fkClubeServer;    
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cor == undefined) {
        res.status(400).send("Sua cor está undefined!");
    } else if (fkClube == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {
        dashclubeModel.cadastrarUnidade(nome, cor, fkClube)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function mudarUnidade(req, res) {
    var nome1 = req.body.nomeServer1;
    var nome2 = req.body.nomeServer2;
    var cor = req.body.corServer;
    var fkClubeM = req.body.fkClubeMServer;
    if (nome1 == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (nome2 == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (cor == undefined) {
        res.status(400).send("Sua cor está undefined!");
    } else if (fkClubeM == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {    
        dashclubeModel.mudarUnidade(nome1, nome2, cor, fkClubeM)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function convidarDesbravador(req, res) {
    var email = req.body.emailServer;
    var fkClube = req.body.fkClubeServer;
    if (email == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fkClube == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        dashclubeModel.convidarDesbravador(email, fkClube)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function deletarUnidade(req, res) {
    var nome = req.body.nomeServer;
    var fkClube = req.body.fkClubeServer;
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fkClube == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        dashclubeModel.deletarUnidade(nome, fkClube)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function buscarUnidade(req, res) {
    var nomeUnidade = req.body.nomeUnidadeServer;
    var fkClube = req.body.fkClubeServer;
    if (nomeUnidade == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fkClube == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        dashclubeModel.buscarUnidade(nomeUnidade, fkClube)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function buscarUnidadeAtual(req, res) {
    var nomeDesbravador = req.body.nomeMoverDesbravadorServer;
    var fkClube = req.body.fkClubeServer;
    if (nomeDesbravador == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fkClube == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        dashclubeModel.buscarUnidadeAtual(nomeDesbravador, fkClube)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function moverDesbravador(req, res) {
    var nomeDesbravador = req.body.nomeDesbravadorServer;
    var fkUnidade = req.body.fkUnidadeServer;
    var fkClube = req.body.fkClubeServer;
    var idUnidade = req.body.idUnidadeAtual;
    if (nomeDesbravador == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fkUnidade == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fkClube == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (idUnidade == 0) {
        dashclubeModel.moverDesbravadorZero(nomeDesbravador, fkUnidade, fkClube)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    } else {
        dashclubeModel.moverDesbravador(nomeDesbravador, fkUnidade, fkClube, idUnidade)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function informacaoDesbravador(req, res) {
    var nome = req.body.nomeServer;
    var fkClube = req.body.fkClubeServer;
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fkClube == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        dashclubeModel.informacaoDesbravador(nome, fkClube)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function carregarUnidade(req, res) {
    var fkClube = req.body.fkClubeServer;
    dashclubeModel.carregarUnidade(fkClube)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
// function carregarUnidade(req, res) {
//     dashclubeModel.carregarUnidade()
//         .then(function (resultado) {
//             if (resultado.length > 0) {
//                 res.status(200).json(resultado);
//             } else {
//                 res.status(204).send("Nenhum resultado encontrado!")
//             }
//         }).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }
function carregarClube(req, res) {
    var fkClubeDados = req.body.fkClubeDadosServer;
    console.log(fkClubeDados);
    dashclubeModel.carregarClube(fkClubeDados)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function CarregarDados(req, res) {
    var fkClubeDados = req.body.fkClubeDadosServer;
    console.log(fkClubeDados);
    dashclubeModel.CarregarDados(fkClubeDados)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function CarregarDesbravador(req, res) {
    var fkClube = req.body.fkClubeServer;
    console.log(fkClube);
    dashclubeModel.CarregarDesbravador(fkClube)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
module.exports = {
    cadastrarUnidade,
    mudarUnidade,
    convidarDesbravador,
    deletarUnidade,
    buscarUnidade,
    buscarUnidadeAtual,
    moverDesbravador,
    informacaoDesbravador,
    carregarUnidade,
    carregarClube,
    CarregarDados,
    CarregarDesbravador
}