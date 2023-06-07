var dashdvbModel = require("../models/dashdvbModel");

function buscarClasse(req, res) {
    var nome = req.body.nomeServer;
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        dashdvbModel.buscarClasse(nome)
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
function SetarPastaClasse(req, res) {
    var fkDvb = req.body.fkDvbServer;
    var fkClasse = req.body.fkClasseServer;
    if (fkDvb == undefined) {
        res.status(400).send("Seu idDesbravador está undefined!");
    } else if (fkClasse == undefined) {
        res.status(400).send("Seu idClasse está undefined!");
    } else {
        dashdvbModel.SetarPastaClasse(fkDvb, fkClasse)
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
function carregarClasse(req, res) {
    var fkDvb = req.body.fkDvbServer;
    if (fkDvb == undefined) {
        res.status(400).send("Seu idDesbravador está undefined!");
    } else {
        dashdvbModel.carregarClasse(fkDvb)
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
function buscarEspecialidade(req, res) {
    var nome = req.body.nomeServer;
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        dashdvbModel.buscarEspecialidade(nome)
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
function SetarPastaEspecialidade(req, res) {
    var fkDvb = req.body.fkDvbServer;
    var fkEspecialidade = req.body.fkEspecialidadeServer;
    if (fkDvb == undefined) {
        res.status(400).send("Seu idDesbravador está undefined!");
    } else if (fkEspecialidade == undefined) {
        res.status(400).send("Seu idEspecialidade está undefined!");
    } else {
        dashdvbModel.SetarPastaEspecialidade(fkDvb, fkEspecialidade)
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
function carregarEspecialidade(req, res) {
    var fkDvb = req.body.fkDvbServer;
    if (fkDvb == undefined) {
        res.status(400).send("Seu idDesbravador está undefined!");
    } else {
        dashdvbModel.carregarEspecialidade(fkDvb)
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
function buscarClasseDeletar(req, res) {
    var nome = req.body.nomeServer;
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        dashdvbModel.buscarClasseDeletar(nome)
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
function buscarEspecialidadeDeletar(req, res) {
    var nome = req.body.nomeServer;
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        dashdvbModel.buscarEspecialidadeDeletar(nome)
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
function DeletarPastaClasse(req, res) {
    var fkDvb = req.body.fkDvbServer;
    var fkClasse = req.body.fkClasseServer;
    if (fkDvb == undefined) {
        res.status(400).send("Seu idDesbravador está undefined!");
    } else if (fkClasse == undefined) {
        res.status(400).send("Seu idClasse está undefined!");
    } else {
        dashdvbModel.DeletarPastaClasse(fkDvb, fkClasse)
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
function DeletarPastaEspecialidade(req, res) {
    var fkDvb = req.body.fkDvbServer;
    var fkEspecialidade = req.body.fkEspecialidadeServer;
    if (fkDvb == undefined) {
        res.status(400).send("Seu idDesbravador está undefined!");
    } else if (fkEspecialidade == undefined) {
        res.status(400).send("Seu idEspecialidade está undefined!");
    } else {
        dashdvbModel.DeletarPastaEspecialidade(fkDvb, fkEspecialidade)
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
function CarregarKPIClasse(req, res) {
    var fkDvb = req.body.fkDesbravadorServer;
    if (fkDvb == undefined) {
        res.status(400).send("Seu idDesbravador está undefined!");
    } else {
        dashdvbModel.CarregarKPIClasse(fkDvb)
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
function CarregarKPIEspecialidade(req, res) {
    var fkDvb = req.body.fkDesbravadorServer;
    if (fkDvb == undefined) {
        res.status(400).send("Seu idDesbravador está undefined!");
    } else {
        dashdvbModel.CarregarKPIEspecialidade(fkDvb)
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
function CarregarGrafico(req, res) {
    var fkDvb = req.body.fkDesbravadorServer;
    var categoria = req.body.categoriaServer;
    if (fkDvb == undefined) {
        res.status(400).send("Seu idDesbravador está undefined!");
    } else if (categoria == undefined) {
        res.status(400).send("Seu idDesbravador está undefined!");
    } else {
        dashdvbModel.CarregarGrafico(fkDvb, categoria)
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