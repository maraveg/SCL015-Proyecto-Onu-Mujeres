export const channels = () => {
    const divChannels = document.createElement("div");
    const viewChannels = `
        <input type="image" id="Logo-TuOportunidad">
        <button type="button" id="user-image">USER IMAGE</button>
        <p>Canales</p>
        <input type="search">
        <div id="Box-channels"></div>
        <div id="mini-menu">
            <ul>
            <li><a href="#/editprofile">Configurar perfil</a></li>
            <li><a href="#/language">Configurar idioma</a></li>
            <li><a href="#/inbox">Ayuda</a></li>
            <li><a href="#/inbox">Cerrar Sesión</a></li>
            </ul>
        </div>
    `;
    divChannels.innerHTML = viewChannels;
    return divChannels;
};