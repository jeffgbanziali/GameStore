import { Game } from "../class/Game.js";

export const addGame = (
  titre,
  image,
  maisonEdition,
  anneeEdition,
  stock,
  genre,
  plateforme,
  prix
) => {
  const newGame = new Game(
    titre,
    image,
    maisonEdition,
    anneeEdition,
    stock,
    genre,
    plateforme,
    prix
  );

  Game.gameList.push(newGame);
};

export const getGameList = () => {
  return Game.gameList;
};
