export const profile = () => {
    const divProfile = document.createElement("div");
    const viewProfile = `
        <p>Zona</p>
        <img src="" alt="">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <button>ENVIAR MENSAJES</button>
    `;
    divProfile.innerHTML = viewProfile;
    return divProfile;
};