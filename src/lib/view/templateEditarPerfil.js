export const editProfile = () => {
    const divEditProfile = document.createElement("div");
    const viewEditProfile = `
    
        <div class="arrow-img-profile"> 
        <img src="./assets/left-arrow.png" id="arrow-profile">
        <p id="edit-profile"> Editar Perfil</p>
        </div>
        <img src="./assets/profile-img1.png" id="img-profile">
        <input class="ph-edit-profile" type="text" placeholder="Nombre">
        <input class="ph-edit-profile" type="text" placeholder="Apellido">
        <input class="ph-edit-profile" type="text" placeholder="¿A qué me dedico?">
        <select class="select-edit-profile"  name="Regions" >Regiones
        <option class="select-edit-profile" value="0" selected disabled>Regiones</option>
        <optgroup label="Zona Norte"></optgroup>
        <option value="Ant">Antofagasta</option>
        <optgroup label="Zona Centro"></optgroup>
        <option value="Met">Metropolitana</option>
        <optgroup label="Zona Sur"></optgroup>
        <option value="Ara">Araucanía</option>
        </select>
        <input class="ph-edit-profile" type="text" placeholder="Ciudad">
        <button id="save-changes">Guardar Cambios</button>
    `;
    divEditProfile.innerHTML = viewEditProfile;
    const loginForm = divEditProfile.querySelector('#save-changes');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/channels';
    })
    return divEditProfile;
};