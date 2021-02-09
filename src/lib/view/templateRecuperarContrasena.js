//import { router } from "./lib/router.js";

export const passwordReset = () => {
    const divPasswordReset = document.createElement("div");
    const viewPasswordReset = `
        <div class:"logos"> 
        <img  id="oportunidad-logo" src="./assets/logo.png"> 
        <img  id="onu-logo"  src="./assets/onu.women.png">
        </div>
        <p>Recupera tu contraseña</p>
        <p>Para recuperar tu contraseña te enviaremos un mensaje de seguridad.</p>
        <p>Escoge el medio:</p>
        <input type="tel" placeholder="SMS">
        <input type="email" placeholder="E-mail">
        <button id="password-button">Confirmar</button>
    `;
    divPasswordReset.innerHTML = viewPasswordReset;
    const loginForm = divPasswordReset.querySelector('#password-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/login';
    })
    return divPasswordReset;
};