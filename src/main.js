import { welcome } from './lib/view/templateBienvenida.js';
import { changeRoute } from './lib/router.js';

const init = () => {
  document.getElementById('root').appendChild(welcome());
  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });
};
window.addEventListener('load', init);

document.getElementById("user-image").addEventListener("click", function(){
  document.getElementById("mini-menu").style.display = "none";
});