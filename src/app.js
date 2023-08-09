/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/logo.png";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".net", ".com", ".org", ".com.pa"];

let nuevoArray = [];
pronoun.forEach(pronombre => {
  adj.forEach(adjetivo => {
    noun.forEach(sustantivo => {
      domain.forEach(dominio => {
        nuevoArray.push([pronombre + adjetivo + sustantivo + dominio]);
      });
    });
  });
});

console.log(nuevoArray);

let tabla = document.querySelector("#tbody");
let button = document.querySelector("#boton");
let reset = document.querySelector("#reset");
let botonClickeado = false;

const generarTabla = () => {
  tabla.innerHTML = "";
  for (const elemento of nuevoArray) {
    let tr = document.createElement("tr");
    tr.classList.add("table-dark", "table-hover");
    for (let j = 0; j < 1; j++) {
      let td = document.createElement("td");
      td.textContent = elemento[j];
      tr.appendChild(td);
    }
    tabla.appendChild(tr);
  }
};

button.addEventListener("click", function() {
  if (!botonClickeado) {
    generarTabla();
    botonClickeado = true;
  }
});

reset.addEventListener("click", function() {
  tabla.innerHTML = "";
  botonClickeado = false;
  location.reload();
});
