import { formatDate } from "@angular/common";
export class MyProjects {
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

  constructor(myProjects) {
    {
      this.id = myProjects.id || this.getRandomID();
      this.img = myProjects.avatar || "assets/images/user/usrbig1.jpg";
      this.name = myProjects.name || "";
      this.type = myProjects.type || "";
      this.from = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.leaveTo = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
      this.reason = myProjects.reason || "";
      this.noOfDays = myProjects.noOfDays || "";
      this.status = myProjects.status || "";
      this.note = myProjects.note || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
