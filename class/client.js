export class Client {
  idClient;
  nom;
  age;
  genrePrefere;
  plateformePreferee;
  jeuxAchete = [];

  static clientList = [];
  static clientNumber = 1;
  constructor(nom, age, genrePrefere, plateformePreferee) {
    this.idClient = Client.clientNumber;
    this.nom = nom;
    this.age = age;
    this.genrePrefere = genrePrefere;
    this.plateformePreferee = plateformePreferee;
    this.jeuxAchete = [];

    Client.clientNumber = Client.clientNumber + 1;
  }
}
