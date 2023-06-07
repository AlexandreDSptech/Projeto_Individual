var express = require("express");
var router = express.Router();

var dashclubeController = require("../controllers/dashclubeController");

router.post("/cadastrarUnidade", function (req, res) {
    dashclubeController.cadastrarUnidade(req, res);
})
router.post("/mudarUnidade", function (req, res) {
    dashclubeController.mudarUnidade(req, res);
})
router.post("/carregarUnidade", function (req, res) {
    dashclubeController.carregarUnidade(req, res);
})
router.post("/convidarDesbravador", function (req, res) {
    dashclubeController.convidarDesbravador(req, res);
})
router.post("/deletarUnidade", function (req, res) {
    dashclubeController.deletarUnidade(req, res);
})
router.post("/buscarUnidade", function (req, res) {
    dashclubeController.buscarUnidade(req, res);
})
router.post("/buscarUnidadeAtual", function (req, res) {
    dashclubeController.buscarUnidadeAtual(req, res);
})
router.post("/moverDesbravador", function (req, res) {
    dashclubeController.moverDesbravador(req, res);
})
router.post("/informacaoDesbravador", function (req, res) {
    dashclubeController.informacaoDesbravador(req, res);
})
// router.get("/carregarUnidade", function (req, res) {
//     dashclubeController.carregarUnidade(req, res);
// })
router.post("/carregarClube", function (req, res) {
    dashclubeController.carregarClube(req, res);
})
router.post("/CarregarDados", function (req, res) {
    dashclubeController.CarregarDados(req, res);
})
router.post("/CarregarDesbravador", function (req, res) {
    dashclubeController.CarregarDesbravador(req, res);
})

module.exports = router;