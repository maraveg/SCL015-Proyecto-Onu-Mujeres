export const communitySearch = () => {
    const divCommunitySearch = document.createElement("div");
    const viewCommunitySearch = `
        <div class:"logos"> 
        <img  id="oportunidad-logo" src="./assets/logo.png"></div>
        <p>COMUNIDAD</p>
        <input type="search" id="SearchUser">
    `;
    divCommunitySearch.innerHTML = viewCommunitySearch;
    return divCommunitySearch;
};