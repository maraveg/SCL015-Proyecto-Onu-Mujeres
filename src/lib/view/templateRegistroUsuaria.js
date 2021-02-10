// import { router } from "./lib/router.js";

export const signUp = () => {
    const divSignUp = document.createElement("div");
    const viewSignUp = `
        <div class:"logos"> 
        <img  id="oportunidad-logo" src="./assets/logo.png"> 
        <img  id="onu-logo"  src="./assets/onu.women.png">
        </div>
        <p id="Registry">Registro</p>
        <div class="name-surname">
        <input type="text" placeholder="Nombre" id="text-name">
        <input type="text" placeholder="Apellido" id="text-surname">
        </div>
        <div class="input-placeholder"><input type="email" placeholder="E-mail" id="text-mail"></div>
        <div class="input-placeholder"><input type="password" placeholder="Contraseña" id="text-password"></div>
        <div class="input-placeholder"><input type="password" placeholder="Repetir Contraseña" id="text-repeat-password"></div>
        <div id="select-regions"><select name="Regions" id="region">Regiones</div>
        <div id="><option value="0" selected disabled>Regiones</option>
        <optgroup label="Zona Norte"></optgroup></div>
        <option value="Ant">Antofagasta</option></div>
        <optgroup label="Zona Centro"></optgroup></div>
        <option value="Met">Metropolitana</option></div>
        <optgroup label="Zona Sur"></optgroup></div>
        <option value="Ara">Araucanía</option></div>
        </select></div>
        <div class="input-placeholder"><input type="text" placeholder="Ciudad"id="text-city"></div>
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