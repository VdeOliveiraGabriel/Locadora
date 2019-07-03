const connection = require('../dataBase/connection.js')
const queryString = "INSERT INTO users (nameUser, emailUser, passWordUser) VALUES (?, ?, ?)"


module.exports = new class userDbqueries {
    CreateUser(user) {
        return new Promise((resolve, reject) => {
            connection.query(queryString, [user.name,user.email,user.passWord], (err, results) => {
                if (err) {
                    res.status(500).send({ message: "Ocorrou um erro ao tentar cadastro o usuário" })
                    return reject(err);
                }
                resolve(results);
            });
        });
    }
}

