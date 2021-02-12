export const welcome = () => {
    const divWelcome = document.createElement("div");
    const viewWelcome = `
        <p>XXXX</p>
        <button>ENTRAR</button>
    `;
    divWelcome.innerHTML = viewWelcome;
    return divWelcome;
};