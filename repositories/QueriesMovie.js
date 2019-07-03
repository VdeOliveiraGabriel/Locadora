const connection = require('../dataBase/connection.js')

var getAllMovies = "SELECT m.*, s.stockMovies, s.totalMovies " +
    "FROM movies m INNER JOIN stock s " +
    "ON m.idMovie = s.idMovie ";

var getMovieByTitle = "SELECT m.*, s.stockMovies, s.totalMovies " +
    "FROM movies m INNER JOIN stock s " +
    "ON m.idMovie = s.idMovie " +
    "WHERE m.titleMovie = ?";

module.exports = new class QueriesMovie {
    GetAll() {
        return new Promise((resolve, reject) => {
            connection.query(getAllMovies, (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }

    GetMovieByTitle(title) {
        return new Promise((resolve, reject) => {
            connection.query(getMovieByTitle, title, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    }
}