const queriesRent = require('../repositories/QueriesRent');

var controller = {};

controller.rentMovie = (req, res) => {
    rent={
        idUser:req.body.idUser,
        idMovie: req.body.idMovie,
        dataRent: new Date()
    }
    queriesRent.RentMovie(rent).then((result, err) => {
        if (err) return res.status(500).send({ message: "Erro ao alugar filme" });
        return res.status(200).send({idRent: result.insertId, message: "Aluguel Realizado" });
    });
}

controller.returnMovie = (req, res) => {
    rent={
        idUser:req.body.idUser,
        idMovie: req.body.idMovie,
        dataReturn: new Date()
    }
    queriesRent.ReturnMovie(rent).then((result, err) => {
        if (err) return res.status(500).send({ message: "Erro ao devolver filme" });
        return res.status(200).send({result});
    });
}

module.exports = controller;