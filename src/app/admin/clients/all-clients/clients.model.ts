import { formatDate } from "@angular/common";
export class Clients {
  id: number;
  img: string;
  name: string;
  mobile: string;
  email: string;
  company_name: string;
  currency: string;
  billing_method: string;

  constructor(client) {
    {
      this.id = client.id || this.getRandomID();
      this.img = client.avatar || "assets/images/user/user1.jpg";
      this.name = client.name || "";
      this.mobile = client.mobile || "";
      this.email = client.email || "";
      this.company_name = client.company_name || "";
      this.currency = client.currency || "";
      this.billing_method = client.billing_method || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
