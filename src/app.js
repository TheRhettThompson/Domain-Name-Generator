/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = function() {
  function domainNameGenerator() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let extension = [".com", ".net", ".us", ".io"];

    let allDomains = [];

    for (let i = 0; i < pronoun.length; i++) {
      for (let description = 0; description < adj.length; description++) {
        for (let thing = 0; thing < noun.length; thing++) {
          for (let address = 0; address < extension.length; address++) {
            allDomains.push(
              pronoun[i] + adj[description] + noun[thing] + extension[address]
            );
          }
        }
      }
    }
    return allDomains;
  }
  let domainCombo = domainNameGenerator();
  for (let a = 0; a < domainCombo.length; a++) {
    document.querySelector("#domain").innerHTML +=
      "<p>" + domainCombo[a] + "</p>";
  }
};
//use nested for loops
//for loop, string concatenation
//console.log("Hello world!");
//for (var i = 0; i < xs.length; i++) { console.log(xs[i]); }
