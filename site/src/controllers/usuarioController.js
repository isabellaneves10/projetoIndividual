var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


function cadastroindicacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var fkIndicador = req.body.fkIndicadorServer;
   

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fkIndicador == undefined) {
        res.status(400).send("Sua fkIndicador está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastroindicacao(nome, email, senha ,fkIndicador )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\Houve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function indicacaoObra(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    
    var fkUsuario = req.body.fkUsuarioServer;
    var obra = req.body.obraServer;
    
    

    // Faça as validações dos valores
    // if (nome == undefined) {
    //     res.status(400).send("Seu nome está undefined!");
    // } else if (email == undefined) {
    //     res.status(400).send("Seu email está undefined!");
    // } else if (senha == undefined) {
    //     res.status(400).send("Sua senha está undefined!");
    // } else if (fkIndicador == undefined) {
    //     res.status(400).send("Sua fkIndicador está undefined!");
    // } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.indicacaoObra(fkUsuario, obra)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\Houve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
// }





function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
   

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha )
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


function cadastrados(req, res) {
      
            usuarioModel.cadastrados()
                
            .then(
                function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).json(resultado);
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!")
                    }
                }).catch(
                    function (erro) {
                        console.log(erro);
                        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
     }


function countMonet(req, res) {
      
            usuarioModel.countMonet()
                
            .then(
                function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).json(resultado);
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!")
                    }
                }).catch(
                    function (erro) {
                        console.log(erro);
                        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
     }
function countFrida(req, res) {
      
            usuarioModel.countFrida()
                
            .then(
                function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).json(resultado);
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!")
                    }
                }).catch(
                    function (erro) {
                        console.log(erro);
                        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
     }


     
// function numeroUsuario(req, res) {
      
//     usuarioModel.numeroUsuario()
        
//     .then(
//         function (resultado) {
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


     
function indicacao(req, res) {
    var indicacao = req.body.indicacaoServer;

    if (indicacao == undefined) {
        res.status(400).send("Sua indicacao está undefined!");
    } else {
        usuarioModel.indicacao(indicacao)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    
                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Não foi nenhum usu[ario com esse id!");
                    } else {
                        res.status(403).send("Mais de um id igual!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    cadastrados,
    indicacao,
    cadastroindicacao,
    indicacaoObra,
    countMonet,
    countFrida
    // numeroUsuario
}