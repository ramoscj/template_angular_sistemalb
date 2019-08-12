export class Estudiante {
  id: number;
  username: string;
  password: string;
  profile: PerfilEstidante;
  work: UserWork;
  contacts: UserContacts;
  social: UserSocial;
  settings: UserSettings;
}

export class PerfilEstidante {
  nombres: string;
  apellidos: string;
  fecha_nac: Object;
  genero: string;
  avatar: string;
}

export class UserWork {
  company: string;
  position: string;
  salary: number;
}

export class UserContacts{
  email: string;
  phone: string;
  address: string;
}

export class UserSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class UserSettings{
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}