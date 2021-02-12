//import { router } from "./lib/router.js";

export const passwordReset = () => {
    const divPasswordReset = document.createElement("div");
    const viewPasswordReset = `
        <div class:"logos"> 
        <img  id="oportunidad-logo" src="./assets/logo.png"> 
        <img  id="onu-logo"  src="./assets/onu.women.png">
        </div>
        <p id="reset-password">Recupera tu contraseña</p>
        <p id="text-reset">Para recuperar tu contraseña te enviaremos un mensaje de seguridad</p>
        <p id="choose">Escoge el medio:</p>
        <div class="placeholder-reset"><input type="tel" id="sms-reset" placeholder="SMS"></div>
        <div class="placeholder-reset"><input type="email" id="mail-reset" placeholder="E-mail"></div>
        <div><button id="password-button">Confirmar</button></div>
    `;
    divPasswordReset.innerHTML = viewPasswordReset;
    const loginForm = divPasswordReset.querySelector('#password-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/login';
    })
    return divPasswordReset;
};