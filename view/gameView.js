import { Game } from "../class/Game.js";

export const showGame = (target) => {
  let gameContainer = document.createElement("div");
  gameContainer.setAttribute("class", "container");
  Game.gameList.map((value, index) => {
    let disk = document.createElement("article");
    disk.setAttribute("class", "disk");

    let image = document.createElement("img");
    image.setAttribute("class", "image");
    image.src = value.image;
    image.alt = value.titre;
    disk.appendChild(image);

    let title = document.createElement("h5");
    title.setAttribute("class", "gameTitle");
    title.appendChild(document.createTextNode(value.titre));
    disk.appendChild(title);

    let details = document.createElement("p");
    details.setAttribute("class", "details");
    details.innerHTML = `Maison d'édition: ${value.maisonEdition}<br>
                         Année d'édition: ${value.anneeEdition}<br>
                         Stock: ${value.stock}<br>
                         Genre: ${value.genre}<br>
                         Plateforme: ${value.plateforme}<br>
                         Prix: ${value.prix} € `;

    disk.appendChild(details);
    gameContainer.appendChild(disk);
  });

  target.appendChild(gameContainer);
};


