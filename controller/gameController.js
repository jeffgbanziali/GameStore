import { Game } from "../class/Game.js";




export const addGame = (titre, maisonEdition, anneeEdition, stock) => {
  const newGame = new Game(
    titre,
    maisonEdition,
    anneeEdition,
    stock
  );

  Game.gameList.push(newGame);
};

export const getGameList = () => {
    return Game.gameList;
  };