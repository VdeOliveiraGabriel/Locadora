const queriesMovie = require('../repositories/QueriesMovie');

var controller = {};

controller.GetAll = function (req, res) {
    queriesMovie.GetAll().then(function (results, err) {
        if (err) return res.status(500).send({ message: "Erro ao buscar a lista de filmes." });
        if (results.length > 0) return res.status(200).send({ movies: results });
        return res.status(200).send({ message: "Nenhum filme cadastrado." });
    });
}

controller.GetMovieByTitle = function (req, res) {
    console.log(req.params.title)
    queriesMovie.GetMovieByTitle(req.params.title).then(function (result, err) {
        if (err) return res.status(500).send({ message: "Erro ao buscar o filme." });
        if (result.length > 0) return res.status(200).send({ movies: result });
        return res.status(200).send({ message: "Nenhum filme cadastrado." });
    });
}

module.exports = controller;