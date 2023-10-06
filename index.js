import {
  addClient,
  clientBuyGame,
  getClientList,
} from "./controller/clientController.js";
import { addGame, buyGame, getGameList } from "./controller/gameController.js";
import { showClientList } from "./view/clientView.js";
import { showGame } from "./view/gameView.js";

addGame(
  "Naruto Shippuden \n Storm Connections",
  "./assets/images/storm.avif",
  "Namco Bandai",
  2023,
  12,
  "Fighting",
  "Xbox Series X / PS5 / PS4 / PC",
  59.99
);
addGame(
  "EA FC 24",
  "./assets/images/fc24.jpg",
  "EA Sports",
  2023,
  20,
  "Sports",
  "Xbox Series X / PS5 / PS4 / Switch / PC",
  69.99
);
addGame(
  "Assassin's Creed: Valhalla",
  "./assets/images/ac.png",
  "Ubisoft",
  2020,
  8,
  "Action-Adventure",
  "Xbox Series X / PS5 / PS4 / PC",
  49.99
);
addGame(
  "Call of Duty: Modern Warfare III",
  "./assets/images/call.jpeg",
  "Activision",
  2023,
  5,
  "First-Person Shooter",
  "Xbox Series X / PS5 / PS4 / PC",
  59.99
);
addGame(
  "Grand Tourismo",
  "./assets/images/gt7.jpg",
  "Polyphony Digital",
  2015,
  15,
  "Racing",
  "Xbox Series X / PS5 / PS4  / PC",
  49.99
);
addGame(
  "Red Dead Redemption 2",
  "./assets/images/rdr.jpeg",
  "Rockstar Games",
  2018,
  10,
  "Action-Adventure",
  "Xbox Series X / PS5 / PS4 / PC",
  59.99
);
addGame(
  "Dragon Ball Kakarot",
  "./assets/images/dbz.jpeg",
  "Bandai Namco",
  2020,
  30,
  "Action RPG",
  "Xbox Series X / PS5 / PS4 / Switch / PC",
  39.99
);
addGame(
  "Grand Theft Auto V",
  "./assets/images/gta.webp",
  "Rockstar Games",
  2013,
  25,
  "Action-Adventure",
  "Xbox Series X / PS5 / PS4 / PC",
  29.99
);
addGame(
  "Spider-Man: Miles Morales",
  "./assets/images/miles.webp",
  "Insomniac Games",
  2020,
  18,
  "Action-Adventure",
  "Xbox Series X / PS5 / PS4 / PC",
  49.99
);
addGame(
  "Mortal Kombat 1",
  "./assets/images/mk.jpeg",
  "NetherRealm Studios",
  1992,
  22,
  "Fighting",
  "Xbox Series X / PS5  / PC",
  39.99
);

addClient("Alice", 25, "Action", "PlayStation 4", []);
addClient("Bob", 30, "Sports", "Xbox Series X");

const clientList = getClientList();
console.log(clientList);

const alice = getClientList()[0];
const storm4 = getGameList()[0];

console.log("****************************************************************");
clientBuyGame(alice, storm4);
console.log("****************************************************************");

const gameList = getGameList();
console.log(gameList);

console.log("****************************************************************");

const gameListAfterPurchase = getGameList();
console.log("Liste des jeux après l'achat:", gameListAfterPurchase);

console.log("****************************************************************");

console.log("****************************************************************");
const gameToBuy = "EA FC 24";
buyGame(gameToBuy);

console.log("****************************************************************");

const onSubmitForm = (gameData) => {
  const gameContainer = document.querySelector(".container");

  const disk = document.createElement("article");
  disk.setAttribute("class", "disk");

  const image = document.createElement("img");
  image.setAttribute("class", "image");
  image.src = gameData.image;
  image.alt = gameData.titre;
  disk.appendChild(image);

  const title = document.createElement("h5");
  title.setAttribute("class", "gameTitle");
  title.appendChild(document.createTextNode(gameData.titre));
  disk.appendChild(title);

  const details = document.createElement("p");
  details.setAttribute("class", "details");
  details.innerHTML = `Maison d'édition: ${gameData.maisonEdition}<br>
                             Année d'édition: ${gameData.anneeEdition}<br>
                             Stock: ${gameData.stock}<br>
                             Genre: ${gameData.genre}<br>
                             Plateforme: ${gameData.plateforme}<br>
                             Prix: ${gameData.prix} € `;

  disk.appendChild(details);
  gameContainer.appendChild(disk);
};

document.addEventListener("DOMContentLoaded", function () {
  const gameForm = document.querySelector("#addNewGame");
  const submitButton = document.querySelector(".addGame");

  if (gameForm && submitButton && gameSection) {
    submitButton.addEventListener("click", function (event) {
      event.preventDefault();

      const formData = new FormData(gameForm);
      let gameData = {};

      formData.forEach((value, key) => {
        if (key === "image") {
          const file = gameForm.querySelector("#imageInput").files[0];
          gameData[key] = file;
        } else {
          gameData[key] = value;
        }
      });

      console.log("FormData:", formData);
      console.log("Processed Game Data:", gameData);

      if (
        gameData.titre &&
        gameData.maisonEdition &&
        gameData.anneeEdition &&
        gameData.stock &&
        gameData.genre &&
        gameData.plateforme &&
        gameData.prix
      ) {
        submitButton.classList.add("success");
        console.log("Données du jeu:", gameData);

        addGame(
          gameData.titre,
          gameData.image,
          gameData.maisonEdition,
          parseInt(gameData.anneeEdition),
          parseInt(gameData.stock),
          gameData.genre,
          gameData.plateforme,
          parseFloat(gameData.prix)
        );

        onSubmitForm(gameData);

        gameForm.reset();
      } else {
        console.error("Veuillez remplir tous les champs obligatoires.");
      }
    });
  } else {
    console.error(
      "La section de formulaire de jeu ou le bouton n'a pas été trouvée"
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const gameSection = document.querySelector("#stockage");
  const clientSection = document.querySelector("#clientStock");

  if (gameSection) {
    showGame(gameSection);
  } else {
    console.error("La section de jeu n'a pas été trouvée");
  }
  if (clientSection) {
    showClientList(clientSection);
  } else {
    console.error("La section de jeu n'a pas été trouvée");
  }
});

// ma fonction de déclencement du carousel

const carouselWrapper = document.querySelector(".carousel-wrapper");
const docs = document.querySelectorAll(".doc");
let myCarousel = 0;

function showImage(index) {
  const position = -index * 100 + "%";
  carouselWrapper.style.transform = "translateX(" + position + ")";
}

function nextImage() {
  myCarousel = (myCarousel + 1) % docs.length;
  showImage(myCarousel);
}

function prevImage() {
  myCarousel = (myCarousel - 1 + docs.length) % docs.length;
  showImage(myCarousel);
}

document.getElementById("prevBtn").addEventListener("click", prevImage);
document.getElementById("nextBtn").addEventListener("click", nextImage);

document.addEventListener("DOMContentLoaded", function () {
  showImage(myCarousel);
});
