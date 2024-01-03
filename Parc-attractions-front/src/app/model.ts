
  export class Visiteur {
    constructor(public id?: number, public nom?: string, public prenom?: string,public age?: number,public taille?: number, public reservation?:Reservation) {
    }

  }
  export class Reservation {
    constructor(public id?: number) {
  
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
   constructor( ) {}
 }
 export class Compte {
  public id?: number
  public login?: string;
  public password?: string;
  public active?: boolean;

  constructor(login: string, password: string, active: boolean) {
    this.login = login;
    this.password = password;
    this.active = active;
  }
}