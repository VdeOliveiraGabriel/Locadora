const jwt = require('jsonwebtoken');

const auth = (req, res, next) =>{
    
    const token_header = req.headers.auth;

    if(!token_header)
        return res.send({err: 'Token não enviado'})
    

    jwt.verify(token_header, 'teste', (err, decoded)=>{
        if(err) return res.send({error: 'token invalido'})
        return next();
    })
}

module.exports = auth;