export class IUsers {
  user: IUser
  address: IAddress;
  pharmaceuticals: IPharmaceuticals;
  treatments: ITreatments;
  note: INote;
  obs: IObservation;
}

export interface IUser {
  name:string;
  age:string;
  cell_phone:string;
  cpf:string;
  rg:string;
  birth_date:string;
  password:string;
  email:string;
  token?: any;
  id:string
}

export interface IPerfil {
  id:string;
  name:string;
}

export interface IAddress{
  street:string;
  complement:string;
  number_home:string;
  city:string;
  state:string;
  cep:string;
}

export interface ITreatments{
  type_consultation:string;
  start_in_consultation:string;
  finish_in_consultation:string
}
export interface IPharmaceuticals {
  pharmaceuticals:string
}
export interface INote{
  last_consultation:string;
  next_consultation:string;
}
export interface IObservation{
  observation:string;
}


export interface ICardView{
  address  :   string
  age : string
  birth_date :  string
  cell_phone: string;
  cpf: string
  createdAt : string
  email : string
  id: string
  name : string
  note : INote
  obs : string
  password: string
  pharmaceuticals: string
  rg: string
  treat: string
  updateAt:string
}