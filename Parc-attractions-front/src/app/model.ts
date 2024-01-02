export class Visiteur {
    constructor(public id?: number, public nom?: string, public prenom?: string,public age?: number,public taille?: number) {
  
    }

  }
  export class Reservation {
    constructor(public id?: number, public visiteurs?: Visiteur[]) {
  
    }

  }
  export class Client{
    
    public nom?: string
    public prenom?: string
   
   public numero ?: string
   public voie?: string;
   public ville? : string;
   public cp ?:string
   public compte? : Compte[];
   constructor( ) {}
 }
 export class Compte {
   public id?: number
   public login?: string
    public password?: string
    public admin?: boolean
   constructor( ) {}
 }