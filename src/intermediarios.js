const validarSenha = (req, res, next) => {
    const {senha} = req.query;

    if(!senha) {
        return res.send("a senha não foi informada");
    }

    if(senha !=="carros123"){
        return res.send("senha está incorreta")

    }
    next()
}

module.exports = {
    validarSenha
}