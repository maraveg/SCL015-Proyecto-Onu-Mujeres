export const channels = () => {
    const divChannels = document.createElement("div");
    const viewChannels = `
        <input type="image" id="Logo-TuOportunidad">
        <a href="#/menu"><input type="image" id="Logo-TuOportunidad"></a>
        <img src="" alt="">
        <p>Canales</p>
        <input type="search">
        <div id="Box-channels"></div>
        <img src="" alt="" id="image-Usuaria">
    `;
    divChannels.innerHTML = viewChannels;
    return divChannels;
};
