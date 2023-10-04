export class Game {
  idGame;
  titre;
  maisonEdition;
  anneeEdition;
  stock;

  static gameList = [];
  static gameNumber = 1;

  constructor(titre, maisonEdition, anneeEdition, stock) {
    this.idGame = Game.gameNumber;
    this.titre = titre;
    this.maisonEdition = maisonEdition;
    this.anneeEdition = anneeEdition;
    this.stock = stock;

    Game.gameNumber = Game.gameNumber + 1;
  }
}
