var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarClube", function (req, res) {
    usuarioController.cadastrarClube(req, res);
})

router.post("/cadastrarDesbravador", function (req, res) {
    usuarioController.cadastrarDesbravador(req, res);
})

router.post("/autenticarClube", function (req, res) {
    usuarioController.entrarClube(req, res);
});

router.post("/autenticarDesbravador", function (req, res) {
    usuarioController.entrarDesbravador(req, res);
});

module.exports = router;