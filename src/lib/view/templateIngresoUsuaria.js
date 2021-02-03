// import { router } from "./lib/router.js";

export const logIn = () => {
    const divLogIn = document.createElement("div");
    const viewLogIn = `
        <h2>INICIAR SESIÓN</h2>
        <button>ENTRAR</button>
    `;
    divLogIn.innerHTML = viewLogIn;
    return divLogIn;
};
