// import { router } from "./lib/router.js";

export const signUp = () => {
    const divsignUp = document.createElement("div");
    const viewsignUp = `
        <p>REGISTRO</p>
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
        <button>REGISTRARSE</button>
    `;
    divsignUp.innerHTML = viewsignUp;
    return divsignUp;
};