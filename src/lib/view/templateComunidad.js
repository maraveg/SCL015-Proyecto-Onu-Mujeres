export const community = () => {
    const divCommunity = document.createElement("div");
    const viewCommunity = `
				<div class="community-arrow">
				<img src="./assets/left-arrow.png" id="icon-arrow">
				<p id="text-community">Comunidad</p>
				</div>
				<p id="text-zone">¡Selecciona una zona y comunícate
				con más mujeres como tú!</p>
				<p><a href="#/north" class="Zones">Zona Norte</a></p>
				<div>
						<div>
						<img class="user" src="./assets/user_gladysMuñoz.jpg">
						<img class="user" src="./assets/user_saraGutierrez.jpg">
						</div>
				</div>
				<p><a href="#/north" class="see-all"><strong>Ver a todas</strong></a></p>
				<p><a href="#/center" class="Zones">Zona Centro</a></p>
				<div>
						<div>
						<img class="user" src="./assets/user_catalinaJara.jpg">
						<img class="user" src="./assets/user_natalyGilbert.jpg">
						</div>
				</div>
				<p><a href="#/center" class="see-all"><strong>Ver a todas</strong></a></p>
				<p><a href="#/south" class="Zones">Zona Sur</a></p>
				<div>
						<div>
						<img class="user" src="./assets/user_samantaRamirez.jpg">
						<img class="user" src="./assets/user_paulaPerez.jpg">
						</div>
				</div>
				<p><a href="#/south" class="see-all"><strong>Ver a todas</strong></a></p>
    `;
    divCommunity.innerHTML = viewCommunity;
    return divCommunity;
};