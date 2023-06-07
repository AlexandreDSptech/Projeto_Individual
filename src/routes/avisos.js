var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});
router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});
router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});
router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});
router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});
router.post("/publicarClube/:idUsuario", function (req, res) {
    avisoController.publicarClube(req, res);
});
router.put("/editar/:idAviso", function (req, res) {
    avisoController.editar(req, res);
});
router.post("/CarregarJoinConvite", function (req, res) {
    avisoController.CarregarJoinConvite(req, res);
})
router.post("/Aceitar", function (req, res) {
    avisoController.Aceitar(req, res);
})
router.post("/Recusar", function (req, res) {
    avisoController.Recusar(req, res);
})
router.post("/CarregarEndereco", function (req, res) {
    avisoController.CarregarEndereco(req, res);
})
router.delete("/deletar/:idAviso", function (req, res) {
    avisoController.deletar(req, res);
});
router.post("/atualizarNotificacaoClube", function (req, res) {
    avisoController.atualizarNotificacaoClube(req, res);
})
router.post("/atualizarNotificacaoDesbravador", function (req, res) {
    avisoController.atualizarNotificacaoDesbravador(req, res);
})
router.post("/VerificarNotificacaoClube", function (req, res) {
    avisoController.VerificarNotificacaoClube(req, res);
})
router.post("/VerificarNotificacaoDesbravador", function (req, res) {
    avisoController.VerificarNotificacaoDesbravador(req, res);
})
router.post("/updateLenco", function (req, res) {
    avisoController.updateLenco(req, res);
})

module.exports = router;