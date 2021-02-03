//import { router } from "./lib/router.js";

export const welcome = () => {
    const divWelcome = document.createElement("div");
    const viewWelcome = `
        <h1>TU OPORTUNIDAD</h1>
        <button>ENTRAR</button>
    `;
    divWelcome.innerHTML = viewWelcome;
    return divWelcome;
};