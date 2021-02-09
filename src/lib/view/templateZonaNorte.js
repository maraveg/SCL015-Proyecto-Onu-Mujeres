export const north = () => {
    const divNorth = document.createElement("div");
    const viewNorth = `
        <p>Comunidad</p>
        <p>¡Bienvenida a la zona norte!</p>
        <input type="search">
        <p>Zona Norte</p>
        <a href="#/profile"><input type="image" id="Logo-TuOportunidad"></a>
    `;
    divNorth.innerHTML = viewNorth;
    return divNorth;
};