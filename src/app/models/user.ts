export class User {
  userName: string;
  password: string;
  authData: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
