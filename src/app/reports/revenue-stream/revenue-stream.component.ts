import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-revenue-stream',
  templateUrl: './revenue-stream.component.html',
  styleUrls: ['./revenue-stream.component.scss']
})
export class RevenueStreamComponent implements OnInit {

  chartRevenueContribution = [];
  chartRevenueTrend = [];
  chartRevenueDeviation = [];

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.getRevenueContribution();
    this.getChartRevenueTrend();
    this.getChartRevenueDeviation();
  }

  getRevenueContribution() {
    const elementChartRevenueContribution = this.elementRef.nativeElement.querySelector('#chartRevenueContribution');

    this.chartRevenueContribution = new Chart(elementChartRevenueContribution, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            '#f56954',
            '#00a65a',
            '#f39c12',
            '#00c0ef',
            '#3c8dbc',
            '#d2d6de'
          ],
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }

  getChartRevenueTrend() {
    const elementChartRevenueTrend = this.elementRef.nativeElement.querySelector('#chartRevenueTrend');
    this.chartRevenueTrend = new Chart(elementChartRevenueTrend, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  getChartRevenueDeviation() {
    const elementChartRevenueDeviation = this.elementRef.nativeElement.querySelector('#chartRevenueDeviation');
    this.chartRevenueDeviation = new Chart(elementChartRevenueDeviation, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
