export const communitySearch = () => {
    const divCommunitySearch = document.createElement("div");
    const viewCommunitySearch = `
        <div class:"logos"> 
        <img  id="oportunidad-logo" src="./assets/logo.png"></div>
        <div class="community-arrow">
        <img src="./assets/left-arrow.png" id="icon-arrow">
        <p id="text-community">Comunidad</p>
        </div>
        <input type="search" id="SearchUser">
    `;
    divCommunitySearch.innerHTML = viewCommunitySearch;
    return divCommunitySearch;
};