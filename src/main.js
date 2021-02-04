//import { myFunction } from "./lib/index.js";
import { welcome } from './lib/view/templateBienvenida.js';
import { editProfile } from './lib/view/templateEditarPerfil.js';
import { logIn } from './lib/view/templateIngresoUsuaria.js';
import { signUp } from './lib/view/templateRegistroUsuaria.js';
import { tutorial } from './lib/view/templateTutorial.js';
import { channels } from './lib/view/templateCanales.js';
import { profile } from './lib/view/templatePerfil.js';
import { community } from './lib/view/templateComunidad.js';
import { communitySearch } from './lib/view/templateComunidadBuscador.js';

console.log("Hello!")

// const myFunction = () => {
//     // aqui tu codigo
//     console.log('Hola mundo!');
// };

document.getElementById("root").appendChild(welcome());
document.getElementById("root").appendChild(logIn());
document.getElementById("root").appendChild(signUp());
document.getElementById("root").appendChild(tutorial());
document.getElementById("root").appendChild(editProfile());
document.getElementById("root").appendChild(channels());
document.getElementById("root").appendChild(profile());
document.getElementById("root").appendChild(community());
document.getElementById("root").appendChild(communitySearch());
// const init = () => {
//     router("login");
//   window.addEventListener("hashchange", () => {
//     myFunction();
//     changeRoute(window.location.hash);
//     console.log(window.location.hash);
//   });
// };
// window.addEventListener("load", init);


// const init = () => {
//     document.getElementById("root").innerHTML = welcome();
// };
// window.addEventListener("load", init);


