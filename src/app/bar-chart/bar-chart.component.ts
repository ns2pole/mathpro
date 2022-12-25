import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

// import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: [ './bar-chart.component.css' ],
})
export class BarChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      // datalabels: {
      //   anchor: 'end',
      //   align: 'end'
      // }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    // DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ '', '', '', '', '', '', '', '', '', '' ],
    datasets: [
      { data: this.getPermutationOf(10)}
    ]
  };

  public randomize(): void {
    this.barChartData.datasets[0].data = this.getPermutationOf(10);
    this.chart?.update();
  }

  private getPermutationOf(n: number): number[] {
    let arr = Array.from(Array(n).keys());
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    arr = arr.map(x => x + 1)
    return arr;
  }

  public async bubbleSort(): Promise<void> {
    for(let i = 0; i < 10 ; i++) {
      this.getSortedArr(this.barChartData.datasets[0].data as number[], i);
      this.chart?.update();  
      await new Promise(resolve => setTimeout(resolve, 1000)) // 3秒待つ
    }
  }

  public getSortedArr(arr: number[], i: number): void {
    // for (let i = 0; i < arr.length - 1; i++) {
      for (let j = arr.length - 1; j > i; j--) {
        if (arr[j] < arr[j - 1]) {
          [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        }
      }
      console.log(arr);
    // }
    // return arr;
  }
}