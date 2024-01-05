
  export class Visiteur {
    constructor(public id?: number, public nom?: string, public prenom?: string,public age?: number,public taille?: number, public reservation?:Reservation) {
    }

  }
  export class Reservation {
    constructor(public id?: number, public dateReservation?:string, public dateFinReservation?:string, public hotel?:Hotel, public compte?:Compte) {
  
    }

  }
  export class Client{
    public id?: number
    public nom?: string
    public prenom?: string
   
   public numero ?: string
   public voie?: string;
   public ville? : string;
   public cp ?:string
   public compte? : Compte;
  
 }
 export class Hotel{
  constructor(public id?: number, public nomHotel?:string, public prixHotel?:number) {
  
  }
 }
 export class Compte {
  
  public id?: number
  public login?: string;
  public password?: string;
  public admin?: boolean;

  constructor(login?: string, password?: string, admin?: boolean) {
    this.login = login;
    this.password = password;
    this.admin = admin;
  }
}

export class Restaurant{
  constructor(public id?: number, public nom?:string, public specialite?:string, public description?:string){

  }
}
export class Repas{
  constructor(public id?:number, public restaurant?:Restaurant, public dateRepas?:string, public heureRepas?:string, public reservation?:Reservation){

  }
}