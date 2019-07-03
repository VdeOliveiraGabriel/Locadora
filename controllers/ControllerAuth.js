const queriesAuth = require('../repositories/QueriesAuth');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const createUserToken = (userId) => {
    return jwt.sign({ id: userId }, 'teste', { expiresIn: 864000 });
}

const controller = {};

controller.auth = async (req, res) => {

    if (!req.body.email || !req.body.passWord) return res.status(400).send({ error: 'Dados insuficientes!' });

    try {
        queriesAuth.AuthUser(req.body.email).then( (results, err) => {
            if (err) return res.status(500).send({ message: "Erro ao buscar usuário" });
            bcrypt.compare(req.body.passWord, results[0].passWordUser, (err, same) => {
                if (!same) return res.send({ error: "erro ao autentificar usuário" })
                return res.send({ results, token: createUserToken(results[0].idUser) })
            }
            );
        });
    }
    catch (err) {
        return res.status(500).send({ error: 'Erro ao buscar usuário!' });
    }
}


module.exports = controller;