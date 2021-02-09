export const editProfile = () => {
    const divEditProfile = document.createElement("div");
    const viewEditProfile = `
        <p>Editar Perfil</p>
        <img src="" alt="">
        <input type="text" placeholder="Nombre">
        <input type="text" placeholder="Apellido">
        <input type="text" placeholder="¿A qué me dedico?">
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
        <button id="edit-profile">GUARDAR CAMBIOS</button>
    `;
    divEditProfile.innerHTML = viewEditProfile;
    const loginForm = divEditProfile.querySelector('#edit-profile');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/channels';
    })
    return divEditProfile;
};