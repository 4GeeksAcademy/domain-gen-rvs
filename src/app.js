/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/logo.png";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".net", ".com", ".org", ".com.pa"];

function generaDominio() {
  pronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  adj = adj[Math.floor(Math.random() * adj.length)];
  noun = noun[Math.floor(Math.random() * noun.length)];
  domain = domain[Math.floor(Math.random() * domain.length)];
  return pronoun + adj + noun + domain;
}

let button = document.querySelector("#boton");
let input = document.querySelector("#dominio");
let reset = document.querySelector("#reset");
let botonClickeado = false;

button.addEventListener("click", function() {
  if (!botonClickeado) {
    let generado = generaDominio();
    input.value = generado;
    botonClickeado = true;
  }
});

reset.addEventListener("click", function() {
  input.value = " ";
  botonClickeado = false;
  location.reload();
});
