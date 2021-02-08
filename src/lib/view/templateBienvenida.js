//import { router } from "./lib/router.js";

export const welcome = () => {
    const divWelcome = document.createElement("div");
    const viewWelcome = `
        <h1>TU OPORTUNIDAD</h1>
        <button id="enter-button">ENTRAR</button>
    `;
    divWelcome.innerHTML = viewWelcome;
    const loginForm = divWelcome.querySelector('#enter-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/login';
    })
    return divWelcome;
};
