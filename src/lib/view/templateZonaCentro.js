export const center = () => {
    const divCenter = document.createElement("div");
    const viewCenter = `
        <p>Comunidad</p>
        <p>¡Bienvenida a la zona centro!</p>
        <input type="search">
        <p>Zona Centro</p>
        <a href="#/profile"><input type="image" id="Logo-TuOportunidad"></a>
    `;
    divCenter.innerHTML = viewCenter;
    return divCenter;
};