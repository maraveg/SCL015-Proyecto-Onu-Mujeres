export const community = () => {
    const divCommunity = document.createElement("div");
    const viewCommunity = `
        <div class:"logos"> 
        <img  id="oportunidad-logo" src="./assets/logo.png"></div>
        <div class="community-arrow">
        <img src="./assets/left-arrow.png" id="icon-arrow">
        <p id="text-community">Comunidad</p>
        </div>
        <p id="text-zone">¡Selecciona una zona y comunícate
        con más mujeres como tú!</p>
        <p><a href="#/north">Zona Norte</a></p>
        <div>
            <div>
            <img class="user" src="./assets/user.png">
            </div>
        </div>
        <p><a href="#/north"><strong>Ver a todas</strong></a></p>
        <p><a href="#/center">Zona Centro</a></p>
        <div>
            <div>
            <img class="user" src="./assets/user.png">
            </div>
        </div>
        <p><a href="#/center"><strong>Ver a todas</strong></a></p>
        <p><a href="#/south">Zona Sur</a></p>
        <div>
            <div>
            <img class="user" src="./assets/user.png">
            </div>
        </div>
        <p><a href="#/south"><strong>Ver a todas</strong></a></p>
    `;
    divCommunity.innerHTML = viewCommunity;
    return divCommunity;
};