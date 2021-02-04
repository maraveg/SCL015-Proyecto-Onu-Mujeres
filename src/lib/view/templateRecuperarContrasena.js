//import { router } from "./lib/router.js";

export const passwordReset = () => {
    const divPasswordReset = document.createElement("div");
    const viewPasswordReset = `
        <p>Recupera tu contraseña</p>
        <p>Para recuperar tu contraseña te enviaremos un mensaje de seguridad.</p>
        <p>Escoge el medio:</p>
        <input type="tel" placeholder="SMS">
        <input type="email" placeholder="E-mail">
        <button>Confirmar</button>
    `;
    divPasswordReset.innerHTML = viewPasswordReset;
    return divPasswordReset;
};