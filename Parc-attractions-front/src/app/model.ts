export class Visiteur {
    constructor(public id?: number, public nom?: string, public prenom?: string,public age?: number,public taille?: number) {
  
    }

  }
  export class Reservation {
    constructor(public id?: number, public visiteurs?: Visiteur[]) {
  
    }

  }