//import { router } from "./lib/router.js";

export const message = () => {
    const divMessage = document.createElement("div");
    const viewMessage = `
        <p>Nuevo Mensaje</p>
        <button>ENVIAR</button>
    `;
    divMessage.innerHTML = viewMessage;
    return divMessage;
};