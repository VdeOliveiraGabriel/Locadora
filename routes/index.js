const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    return res.send({mensage: 'Tudo ok com o metodo get da raiz'})
})

router.post('/', (req, res) =>{
    return res.send({mensage: 'Tudo ok com o metodo Post da raiz'})
})

module.exports = router;