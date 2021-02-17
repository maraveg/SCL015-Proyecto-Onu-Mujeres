export const south = () => {
    const divSouth = document.createElement("div");
    const viewSouth = `
        <div class="community-arrow">
        <a class="navbar-brand" href="#/community">
        <img src="./assets/left-arrow.png" id="icon-arrow">
        <p id="text-community">Comunidad</p>
        </a>
        </div>
        <p>¡Bienvenida a la zona sur!</p>
        <input type="search">
        <p>Zona Sur</p>
        <a href="#/profile"><input type="image" id="Logo-TuOportunidad"></a>
    `;
    divSouth.innerHTML = viewSouth;
    return divSouth;
};