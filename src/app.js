/* eslint-disable */
import "bootstrap";
import "./style.css";

let button = document.querySelector("#domain");
let container = document.querySelector("#container");
let NamesDom = [];

button.addEventListener("click", function() {
  let randomDomain = NamesDom[Math.floor(Math.random() * NamesDom.length)];

  let newH1 = document.createElement("h1");
  newH1.innerText = randomDomain;

  container.appendChild(newH1);
});

let articles = ["the", "our", "an", "Some"];
let adjs = ["awesome", "cool", "intriguing", "thrilling", "funny"];
let nouns = ["website", "blog", "webapp", "spot", "hub"];
let tlds = [".com", ".es", ".uy", ".br", ".ar", ".mx", ".org"];

function domainNames() {
  for (let article of articles) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          NamesDom.push(`${article}${adj}${noun}${tld}`);
        }
      }
    }
  }
}

domainNames();
