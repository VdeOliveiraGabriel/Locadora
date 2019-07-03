const bcrypt = require ('bcrypt')
const userDbqueries = require('../repositories/QueriesUser');

var controller = {};

controller.addUser = (req,res) => {
    var user = req.body;
    var salt = bcrypt.genSaltSync(10)
    user.passWord =  bcrypt.hashSync(user.passWord, salt);

    if(user.passWord == null) {
        return res.status(500).send({message:"Erro ao criptografar senha do usuario"});
    }
    else {
        userDbqueries.CreateUser(user).then((results, err) => {
            if(err) return res.status(500).send({message: "Erro ao criar usuario"});         
            res.status(201).send({
                userId: results.insertId,
                mensage: "Usuário cadastrado com sucesso."
            });
        });
    }
}

module.exports = controller;