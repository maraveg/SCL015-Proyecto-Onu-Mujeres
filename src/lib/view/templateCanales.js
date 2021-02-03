export const channels = () => {
    const divChannels = document.createElement("div");
    const viewChannels = `
        <p>Canales</p>
        <input type="image" id="Logo-TuOportunidad">
        <input type="search">
        <div id="Box-channels"></div>
        <img src="" alt="" id="image-Usuaria">
    `;
    divChannels.innerHTML = viewChannels;
    return divChannels;
};
