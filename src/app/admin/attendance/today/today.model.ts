import { formatDate } from "@angular/common";
export class Today {
  id: number;
  img: string;
  name: string;
  first_in: string;
  break: string;
  last_out: string;
  total: string;
  status: string;
  shift: string;

  constructor(today) {
    {
      this.id = today.id || this.getRandomID();
      this.img = today.avatar || "assets/images/user/usrbig1.jpg";
      this.name = today.name || "";
      this.first_in = today.first_in || "";
      this.break = today.break || "";
      this.last_out = today.last_out || "";
      this.total = today.total || "";
      this.status = today.status || "";
      this.shift = today.shift || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
