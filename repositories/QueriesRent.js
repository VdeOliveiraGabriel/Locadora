const connection = require('../dataBase/connection.js')

const rentStock = "UPDATE stock SET stockMovies = stockMovies - 1  " +
    "WHERE idMovie = ? " +
    "AND stockMovies > 0 ";

const returnStock = "UPDATE stock SET stockMovies = stockMovies + 1  " +
    "WHERE idMovie = ? ";

const insertRent = "INSERT INTO rents(idUser, idMovie, dataRent) VALUES (?, ?, ?) ";
const insertReturnRent = "UPDATE rents SET returnRent = ? " +
    "WHERE idMovie = ? " +
    "AND idUser = ? " +
    "AND  returnRent IS NULL ";

module.exports = new class QueriesMovie {
    RentMovie(rent) {
        return new Promise((resolve, reject) => {
            connection.query(rentStock, [rent.idMovie], (err, result) => {
                if (err) return reject(err);
                if (result.changedRows > 0) {
                    connection.query(insertRent, [rent.idUser, rent.idMovie, rent.dataRent], (err, result) => {
                        if (err) return reject(err);
                        resolve(result);
                    });
                }else return resolve({ message: "Filme indisponível" })
            });
        });
    }
    ReturnMovie(rent) {
        return new Promise((resolve, reject) => {
            connection.query(insertReturnRent, [rent.dataReturn, rent.idMovie, rent.idUser], (err, result) => {
                if (err) return reject(err);
                if (result.changedRows > 0) {
                    connection.query(returnStock, [rent.idMovie], (err, result) => {
                        if (err) return reject(err);
                        return resolve({mensage: "Filme entregue com sucesso."});
                        
                    });
                    console.log("entrar aqui")
                }else return resolve({mensage: "Este filme já foi entregue."})
            });
        });
    }
}
