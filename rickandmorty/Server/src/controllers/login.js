const { User } = require("../DB_connection");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) return res.status(400).send("Faltan datos");

        const user = await User.findOne({ where: { email: email} });
        if(!user) return res.status(404) .send('Usuario no encontrado');

        return user.password === password
        ? res.json({ acces: true })
        : res.status(500).send( 'Contraseña incorrecta' );
        
    } catch (error) {}
}

const user = users.find(
    (user) => user.email === email && user.password === password
);

module.exports = {login};
