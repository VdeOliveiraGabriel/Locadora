const connection = require('../dataBase/connection.js')

var sqlAuth = "SELECT * " +
          "FROM users " +
          "WHERE emailUser = ? ";

module.exports = new class QueriesMovie {
    AuthUser(emailUser){
        return new Promise((resolve, reject) => {
            connection.query(sqlAuth, [emailUser] ,(err,result) => {
                if(err) return reject(err);
                resolve(result);
            });
        });
    }
}
