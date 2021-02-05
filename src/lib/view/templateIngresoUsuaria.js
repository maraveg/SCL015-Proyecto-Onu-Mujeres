// import { router } from "./lib/router.js";

export const logIn = () => {
    const divLogIn = document.createElement("div");
    const viewLogIn = `
        <h2>INICIAR SESIÓN</h2>
        <input type="email" placeholder="E-mail">
        <input type="password" placeholder="Contraseña">
        <button>ENTRAR</button>
    `;
    divLogIn.innerHTML = viewLogIn;
    return divLogIn;
};
