//import { router } from "./lib/router.js";

export const language = () => {
    const divLanguage = document.createElement("div");
    const viewLanguage = `
        <p id="language-settings">Configuración de Idioma</p>
        <p id="choose-language">Escoge un idioma</p>
        <p id="choose-language-again">Puedes volver a cambiar en idioma nuevamente en tu perfil.</p>
        <p class="input-language"><input type="radio">Français</p>
        <p class="input-language"><input type="radio">Español</p>
        <p class="input-language"><input type="radio">English</p>
        <button id="language-button">Confirmar</button>
    `;
    divLanguage.innerHTML = viewLanguage;
    const loginForm = divLanguage.querySelector('#language-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/channels';
    })
    return divLanguage;
};