export class Game {
    idGame;
    titre;
    image;
    maisonEdition;
    anneeEdition;
    stock;
    genre;
    plateforme;
    prix;
  
    static gameList = [];
    static gameNumber = 1;
  
    constructor(titre,image, maisonEdition, anneeEdition, stock, genre, plateforme, prix) {
      this.idGame = Game.gameNumber;
      this.titre = titre;
      this.image = image;
      this.maisonEdition = maisonEdition;
      this.anneeEdition = anneeEdition;
      this.stock = stock;
      this.genre = genre;
      this.plateforme = plateforme;
      this.prix = prix;
  
      Game.gameNumber = Game.gameNumber + 1;
    }
  }
  