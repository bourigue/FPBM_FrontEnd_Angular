import { Component, OnInit } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexLegend,
  ApexFill,
  ApexResponsive,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: "app-dashboard2",
  templateUrl: "./dashboard2.component.html",
  styleUrls: ["./dashboard2.component.scss"],
})
export class Dashboard2Component implements OnInit {
  public lineChartOptions: Partial<ChartOptions>;
  public pieChartOptions: any;
  //  color: ["#3FA7DC", "#F6A025", "#9BC311"],
  constructor() {}
  ngOnInit() {
    this.chart1();
    this.chart2();
  }

  private chart1() {
    this.lineChartOptions = {
      series: [
        {
          name: "Employee 1",
          data: [70, 200, 80, 180, 170, 105, 210],
        },
        {
          name: "Employee 2",
          data: [80, 250, 30, 120, 260, 100, 180],
        },
        {
          name: "Employee 3",
          data: [85, 130, 85, 225, 80, 190, 120],
        },
      ],
      chart: {
        height: 350,
        type: "line",
        foreColor: "#9aa0ac",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#A5A5A5", "#875692", "#4CB5AC"],
      stroke: {
        curve: "smooth",
      },
      grid: {
        row: {
          colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 3,
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        title: {
          text: "Month",
        },
      },
      yaxis: {
        // opposite: true,
        title: {
          text: "Clients",
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }

  private chart2() {
    this.pieChartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut",
        width: 225,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      labels: ["Science", "Mathes", "Economics", "History", "Music"],
      responsive: [
        {
          breakpoint: 480,
          options: {},
        },
      ],
    };
  }
}
