//import { router } from "./lib/router.js";

export const inbox = () => {
    const divInbox = document.createElement("div");
    const viewInbox = `
        <p>Mensajes</p>
        <button>Crear Grupo</button>
    `;
    divInbox.innerHTML = viewInbox;
    return divInbox;
};