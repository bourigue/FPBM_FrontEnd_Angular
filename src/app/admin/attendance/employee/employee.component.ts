import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.sass"],
})
export class EmployeeComponent {
  gradient = false;
  showLegend = true;
  legendPosition = "right";
  view: any[] = [500, 400];
  colorScheme = {
    domain: ["#9370DB", "#87CEFA", "#FA8072", "#FF7F50", "#90EE90", "#9370DB"],
  };
  showLabels = true;
  // data goes here
  public single = [
    {
      name: "Present",
      value: 42,
    },
    {
      name: "On Duty",
      value: 2,
    },
    {
      name: "Paid Leave",
      value: 5,
    },
    {
      name: "Absent",
      value: 1,
    },
    {
      name: "Holiday Leave",
      value: 3,
    },
    {
      name: "Weekend",
      value: 0,
    },
  ];
}
