// import { router } from "./lib/router.js";

export const signUp = () => {
    const divSignUp = document.createElement("div");
    const viewSignUp = `
        <div class:"logos"> 
        <img  id="oportunidad-logo" src="./assets/logo.png"> 
        <img  id="onu-logo"  src="./assets/onu.women.png">
        </div>
        <p>Registro</p>
        <input type="text" placeholder="Nombre">
        <input type="text" placeholder="Apellido">
        <input type="email" placeholder="E-mail">
        <input type="password" placeholder="Contraseña">
        <input type="password" placeholder="Repetir Contraseña">
        <select name="Regions" id="region">Regiones
        <option value="0" selected disabled>Regiones</option>
        <optgroup label="Zona Norte"></optgroup>
        <option value="Ant">Antofagasta</option>
        <optgroup label="Zona Centro"></optgroup>
        <option value="Met">Metropolitana</option>
        <optgroup label="Zona Sur"></optgroup>
        <option value="Ara">Araucanía</option>
        </select>
        <input type="text" placeholder="Ciudad">
        <p>Al clickear "Registrarme" aceptas nuestras Condiciones, la Politica de datos y la Politica de cookies.</p>
        <button id="signup-button">Registrarme</button>
    `;
    divSignUp.innerHTML = viewSignUp;
    const loginForm = divSignUp.querySelector('#signup-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/channels';
    })
    return divSignUp;
};