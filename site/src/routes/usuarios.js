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
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/indicacao", function (req, res) {
    usuarioController.indicacao(req, res);
})

router.post("/cadastroindicacao", function (req, res) {
    usuarioController.cadastroindicacao(req, res);
})
router.post("/indicacaoObra", function (req, res) {
    usuarioController.indicacaoObra(req, res);
})

/*rota nova pra metrica : "já somos **** cadastrados" */
router.get("/cadastrados", function (req, res) {
    usuarioController.cadastrados(req, res);
})

router.get("/countFrida", function (req, res) {
    usuarioController.countFrida(req, res);
})
router.get("/countMichelangelo", function (req, res) {
    usuarioController.countMichelangelo(req, res);
})
// router.get("/numeroUsuario", function (req, res) {
//     usuarioController.numeroUsuario(req, res);
// })

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;