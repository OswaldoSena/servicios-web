//constante que importa el mensaje error de la clase error en login.html

const mensajeError = document.getElementsByClassName("error")[0];
//trae el formulario del html escuchandonel submit e impidiendo el envio por defecto
//e es el evento
document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    //ruta del body de la consola para obtener los valores de user y password
    const user = e.target.children.user.value;
    const password = e.target.children.password.value;
    //esperando respuesta del  servidor interpretando el json 
    const res = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user, password
        })
    });
    //si la respuesta no es ok muestra mensaje de error en la clase escondido de lo contrario lo redirecciona a la pagina
    if (!res.ok) return mensajeError.classList.toggle("escondido", false);
    const resJson = await res.json();
    if (resJson.redirect) {
        window.location.href = resJson.redirect;
    }
})