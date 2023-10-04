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
