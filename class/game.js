export class Game {
    idGame;
    titre;
    image;
    maisonEdition;
    anneeEdition;
    stock;
  
    static gameList = [];
    static gameNumber = 1;
  
    constructor(titre,image, maisonEdition, anneeEdition, stock) {
      this.idGame = Game.gameNumber;
      this.titre = titre;
      this.image = image;
      this.maisonEdition = maisonEdition;
      this.anneeEdition = anneeEdition;
      this.stock = stock;
  
      Game.gameNumber = Game.gameNumber + 1;
    }
  }
  