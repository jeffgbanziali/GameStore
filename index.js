import { addGame, getGameList } from "./controller/gameController.js";
import { showGame } from "./view/gameView.js";

addGame(
  "Storm 4",
  "./assets/images/storm.avif",
  "Namco Bandai",
  2023,
  12,
  "Fighting",
  "PlayStation 4",
  59.99
);
addGame(
  "EA FC 24",
  "./assets/images/fc24.jpg",
  "EA Sports",
  2023,
  20,
  "Sports",
  "Xbox Series X",
  69.99
);
addGame(
  "Assassin's Creed: Valhalla",
  "./assets/images/ac.png",
  "Ubisoft",
  2020,
  8,
  "Action-Adventure",
  "PlayStation 5",
  49.99
);
addGame(
  "Call of Duty: Modern Warfare III",
  "./assets/images/call.jpeg",
  "Activision",
  2023,
  5,
  "First-Person Shooter",
  "PC",
  59.99
);
addGame(
  "Grand Tourismo",
  "./assets/images/gt7.jpg",
  "Polyphony Digital",
  2015,
  15,
  "Racing",
  "PlayStation 4",
  49.99
);
addGame(
  "Red Dead Redemption 2",
  "./assets/images/rdr.jpeg",
  "Rockstar Games",
  2018,
  10,
  "Action-Adventure",
  "Xbox One",
  59.99
);
addGame(
  "Dragon Ball Kakarot",
  "./assets/images/dbz.jpeg",
  "Bandai Namco",
  2020,
  30,
  "Action RPG",
  "PlayStation 4",
  39.99
);
addGame(
  "Grand Theft Auto V",
  "./assets/images/gta.webp",
  "Rockstar Games",
  2013,
  25,
  "Action-Adventure",
  "PC",
  29.99
);
addGame(
  "Spider-Man: Miles Morales",
  "./assets/images/miles.webp",
  "Insomniac Games",
  2020,
  18,
  "Action-Adventure",
  "PlayStation 5",
  49.99
);
addGame(
  "Mortal Kombat 1",
  "./assets/images/mk.jpeg",
  "NetherRealm Studios",
  1992,
  22,
  "Fighting",
  "Sega Genesis",
  39.99
);

const gameList = getGameList();
console.log(gameList);

document.addEventListener("DOMContentLoaded", function () {
  const gameSection = document.querySelector("#stockage");

  if (gameSection) {
    showGame(gameSection);
  } else {
    console.error("game section not found");
  }
});
