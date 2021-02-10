// import { router } from "./lib/router.js";

export const signUp = () => {
    const divSignUp = document.createElement("div");
    const viewSignUp = `
        <div class:"logos"> 
        <img  id="oportunidad-logo" src="./assets/logo.png"> 
        <img  id="onu-logo"  src="./assets/onu.women.png">
        </div>
        <p id="Registry">Registro</p>
        <div class="input-placeholder">
        <input type="text" placeholder="Nombre" id="text-name" class="name-surname">
        <input type="text" placeholder="Apellido" id="text-surname" class="name-surname">
        </div>
        <select name="Regions" id="region">Regiones
        <option value="0" selected disabled>Zona</option>
        <option value="Ant">Zona Norte</option></div>
        <option value="Met">Zona Centro</option></div>
        <option value="Ara">Zona Sur</option></div>
        </select></div>
        <select id="city">
        <option value="0" selected disabled id="color-city">Ciudad</option>
        <option value="Ant">Antofagasta</option></div>
        <option value="Met">Santiago</option></div>
        <option value="Ara">Temuco/option></div>
        </select></div>
        <div class="input-placeholder"><input type="email" placeholder="E-mail" id="text-mail"></div>
        <div class="input-placeholder"><input type="password" placeholder="Contraseña" id="text-password"></div>
        <div class="input-placeholder"><input type="password" placeholder="Repetir Contraseña" id="text-repeat-password"></div>
        <p id="conditions">Al clickear "Registrarme" aceptas nuestras Condiciones, la Politica de datos y la Politica de cookies.</p>
        <button id="signup-button">Registrarme</button>
    `;
    divSignUp.innerHTML = viewSignUp;
    const loginForm = divSignUp.querySelector('#signup-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/channels';
    })
    return divSignUp;
};