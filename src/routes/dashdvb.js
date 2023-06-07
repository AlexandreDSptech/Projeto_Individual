var express = require("express");
var router = express.Router();

var dashdvbController = require("../controllers/dashdvbController");

router.post("/buscarClasse", function (req, res) {
    dashdvbController.buscarClasse(req, res);
})
router.post("/SetarPastaClasse", function (req, res) {
    dashdvbController.SetarPastaClasse(req, res);
})
router.post("/carregarClasse", function (req, res) {
    dashdvbController.carregarClasse(req, res);
})
router.post("/buscarEspecialidade", function (req, res) {
    dashdvbController.buscarEspecialidade(req, res);
})
router.post("/SetarPastaEspecialidade", function (req, res) {
    dashdvbController.SetarPastaEspecialidade(req, res);
})
router.post("/carregarEspecialidade", function (req, res) {
    dashdvbController.carregarEspecialidade(req, res);
})
router.post("/buscarClasseDeletar", function (req, res) {
    dashdvbController.buscarClasseDeletar(req, res);
})
router.post("/buscarEspecialidadeDeletar", function (req, res) {
    dashdvbController.buscarEspecialidadeDeletar(req, res);
})
router.post("/DeletarPastaClasse", function (req, res) {
    dashdvbController.DeletarPastaClasse(req, res);
})
router.post("/DeletarPastaEspecialidade", function (req, res) {
    dashdvbController.DeletarPastaEspecialidade(req, res);
})
router.post("/CarregarKPIClasse", function (req, res) {
    dashdvbController.CarregarKPIClasse(req, res);
})
router.post("/CarregarKPIEspecialidade", function (req, res) {
    dashdvbController.CarregarKPIEspecialidade(req, res);
})
router.post("/CarregarGrafico", function (req, res) {
    dashdvbController.CarregarGrafico(req, res);
})
module.exports = router;