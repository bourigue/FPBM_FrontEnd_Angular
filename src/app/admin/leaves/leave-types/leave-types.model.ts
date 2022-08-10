import { formatDate } from "@angular/common";
export class LeaveTypes {
  id: number;
  img: string;
  leave_name: string;
  type: string;
  leave_unit: string;
  status: string;
  note: string;

  constructor(leaves) {
    {
      this.id = leaves.id || this.getRandomID();
      this.img = leaves.avatar || "assets/images/user/usrbig1.jpg";
      this.leave_name = leaves.leave_name || "";
      this.type = leaves.type || "";
      this.leave_unit = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.status = leaves.reason || "";
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
