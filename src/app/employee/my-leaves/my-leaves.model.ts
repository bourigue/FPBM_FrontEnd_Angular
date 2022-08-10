export class MyLeaves {
  id: number;
  halfDay: string;
  applyDate: string;
  fromDate: string;
  toDate: string;
  reason: string;
  type: string;
  status: string;
  constructor(myLeaves) {
    {
      this.id = myLeaves.id || this.getRandomID();
      this.halfDay = myLeaves.halfDay || "";
      this.applyDate = myLeaves.applyDate || "";
      this.fromDate = myLeaves.fromDate || "";
      this.toDate = myLeaves.toDate || "";
      this.reason = myLeaves.reason || "";
      this.type = myLeaves.type || "";
      this.status = myLeaves.status || "";
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
