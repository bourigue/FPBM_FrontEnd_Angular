import { formatDate } from "@angular/common";
export class Leaves {
  id: number;
  img: string;
  name: string;
  type: string;
  from: string;
  leaveTo: string;
  noOfDays: string;
  status: string;
  reason: string;
  note: string;

  constructor(leaves) {
    {
      this.id = leaves.id || this.getRandomID();
      this.img = leaves.avatar || "assets/images/user/usrbig1.jpg";
      this.name = leaves.name || "";
      this.type = leaves.type || "";
      this.from = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.leaveTo = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.reason = leaves.reason || "";
      this.noOfDays = leaves.noOfDays || "";
      this.status = leaves.status || "";
      this.note = leaves.note || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
