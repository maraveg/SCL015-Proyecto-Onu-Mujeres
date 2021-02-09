export const south = () => {
    const divSouth = document.createElement("div");
    const viewSouth = `
        <p>Comunidad</p>
        <p>¡Bienvenida a la zona sur!</p>
        <input type="search">
        <p>Zona Sur</p>
        <a href="#/profile"><input type="image" id="Logo-TuOportunidad"></a>
    `;
    divSouth.innerHTML = viewSouth;
    return divSouth;
};