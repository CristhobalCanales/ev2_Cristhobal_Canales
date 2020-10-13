alert('Funciona');

import login from "./modules/login.js";
import login from "./modules/basket.js";

var caja = document.getElementById("caja");

window.login = login.login;
window.basket = basket.basket;

document.getElementById("login").addEventListener("click", () => {
caja.innerHTML = login.data;

});

 

