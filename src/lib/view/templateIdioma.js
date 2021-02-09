//import { router } from "./lib/router.js";

export const language = () => {
    const divLanguage = document.createElement("div");
    const viewLanguage = `
        <p>Configuración de Idioma</p>
        <p>Escoge un idioma.</p>
        <p>Puedes volver a cambiar en idioma nuevamente en tu perfil.</p>
        <p><input type="radio">Kreyol</p>
        <p><input type="radio">Español</p>
        <p><input type="radio">English</p>
        <button id="language-button">Confirmar</button>
    `;
    divLanguage.innerHTML = viewLanguage;
    const loginForm = divLanguage.querySelector('#language-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/channels';
    })
    return divLanguage;
};