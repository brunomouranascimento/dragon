export class Dragon {
  _id: string;
  name: [];
  type: string;
  created_at: string;
  slug: string;
  __v: number;
  histories: [];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
