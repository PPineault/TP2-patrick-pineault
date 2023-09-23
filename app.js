// API à utiliser pour le travail: https://randomuser.me/api/?results=5
fetch("https://randomuser.me/api/?results=5")
  .then((response) => response.json())
  .then((data) => {
    let perso = data.results;
    let output = '';
    perso.forEach(function (listes) {
      output += `
  <p> <img src=" ${listes.picture.large}" alt=""> </p>
  <p>     Nom:   ${listes.name.first}    ${listes.name.last}     <p>
    <p>    E-mail :  ${listes.email}            </p>
 `;
    });
    document.getElementById("container").innerHTML = output;
  });