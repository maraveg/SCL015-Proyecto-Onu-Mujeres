//import { myFunction } from "./lib/index.js";
import { welcome } from './lib/view/templateBienvenida.js';
import { logIn } from './lib/view/templateIngresoUsuaria.js';
import { signUp } from './lib/view/templateRegistroUsuaria.js';
import { tutorial } from './lib/view/templateTutorial.js';

console.log("Hello!")

// const myFunction = () => {
//     // aqui tu codigo
//     console.log('Hola mundo!');
// };

document.getElementById("root").appendChild(welcome());
document.getElementById("root").appendChild(logIn());
document.getElementById("root").appendChild(signUp());
document.getElementById("root").appendChild(tutorial());
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


