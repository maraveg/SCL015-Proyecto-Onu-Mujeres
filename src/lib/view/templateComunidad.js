export const community = () => {
    const divCommunity = document.createElement("div");
    const viewCommunity = `
        <p>COMUNIDAD</p>
        <p>¡Selecciona una zona y comunícate
        con más mujeres como tú!
        </p>
        <p>ZONA NORTE</p>
        <p>Ver a Todas</p>
        <p>ZONA CENTRO</p>
        <p>Ver a Todas</p>
        <p>ZONA SUR</p>
        <p>Ver a Todas</p>
    `;
    divCommunity.innerHTML = viewCommunity;
    return divCommunity;
};