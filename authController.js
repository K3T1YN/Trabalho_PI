const login = (req, res) => {
    const {email, senha} = req.body;

        if (email == 'admin@exemple.com' && senha === '12345678') {
            return res.status(200).json({message: 'Sucess', token: 'token'});
        }
        return res.status(401).json({message: 'Credenciais Inválidas'})
}

module.exports = {login}