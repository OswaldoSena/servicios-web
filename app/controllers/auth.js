//usuario por defecto
const usuarios = [{
    user: "a",
    email: "a@a.com",
    password: "a"
}]

//funcion de login con los parametros de requiere y responde
function login(req, res) {
    //console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    //mensaje de error por si algun campo esta mal
    if (!user || !password) {
        return res.status(400).send({ status: "Error", message: "Los campos están incompletos" });
    }
    //el usuario ya existe, 
    const usuarioExistente = usuarios.find(usuario => usuario.user === user);
    //mensaje de error por si el usuario es diferente, de lo contrario redirecciona a la pagina principal
    if (!usuarioExistente) {
        return res.status(400).send({ status: "Error", message: "Error de inicio de Sesión" });
    } else {
        return res.status(201).send({ status: "ok", message: `Usuario ${usuarioExistente.user} agregado`, redirect: "/home" });

    }



}

function register(req, res) {
    //console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    const email = req.body.email;

    if (!user || !password || !email) {
        return res.status(400).send({ status: "Error", message: "Los campos están incompletos" });
    }

    const usuarioExistente = usuarios.find(usuario => usuario.user === user);
    if (usuarioExistente) {
        return res.status(400).send({ status: "Error", message: "Usuario ya existe" })
    }

    const nuevoUsuario = {
        user, email, password
    }
    console.log(nuevoUsuario),
        usuarios.push(nuevoUsuario);
    console.log(usuarios);
    return res.status(201).send({ status: "ok", message: `Usuario ${nuevoUsuario.user} agregado`, redirect: "/" })

}

export const methods = {
    login,
    register
}