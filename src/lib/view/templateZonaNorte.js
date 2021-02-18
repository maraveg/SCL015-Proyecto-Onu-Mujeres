export const north = () => {
    const divNorth = document.createElement("div");
    const viewNorth = `
        <div class="community-arrow">
        <a class="navbar-brand" href="#/community">
        <img src="./assets/left-arrow.png" id="icon-arrow">
        <p id="text-community">Comunidad</p>
        </a>
        </div>
        <p>¡Bienvenida a la zona norte!</p>
        <input type="search">
        <p>Zona Norte</p>
        <a href="#/profile"><input type="image" id="Logo-TuOportunidad"></a>
    `;
    divNorth.innerHTML = viewNorth;
    return divNorth;
};