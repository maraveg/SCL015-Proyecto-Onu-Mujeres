export const communitySearch = () => {
    const divCommunitySearch = document.createElement("div");
    const viewCommunitySearch = `
        <p>COMUNIDAD</p>
        <input type="search" id="SearchUser">
    `;
    divCommunitySearch.innerHTML = viewCommunitySearch;
    return divCommunitySearch;
};