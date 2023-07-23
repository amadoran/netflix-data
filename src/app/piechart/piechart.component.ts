import { Component } from '@angular/core';
import { Collection } from '../interfaces/collection';
import { DatagetterService } from '../servicios/datagetter.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  public chart: any;
  public data: Collection[] = [];
  constructor(private dataProvider: DatagetterService){}

  ngOnInit() {
    this.dataProvider.getResponse().subscribe(response => {
      this.data = (response as Collection[])
      console.log(this.data)
      this.createChart(this.data);
    })
    
  }
  generateRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  createChart(data: Collection[]){
    const ratingsList: string[] = data.map(item => item.rating)
    .filter(rating => rating !== null && !rating.includes(' min') && rating!="") as string[];;

    const ratingsCount: { [key: string]: number } = {};
    for (const rating of ratingsList) {
      ratingsCount[rating] = (ratingsCount[rating] || 0) + 1;
    }
    const backgroundColors: string[] = [];
    const labels: string[] = Object.keys(ratingsCount);
    
    // Generar colores aleatorios para cada elemento en el gráfico
    for (let i = 0; i < labels.length; i++) {
      backgroundColors.push(this.generateRandomColor());
    }

    this.chart = new Chart("MyChart", {
      type: 'pie',
      data: {
        labels: Object.keys(ratingsCount),
        datasets: [{
          label: 'My First Dataset',
          data: Object.values(ratingsCount),
          backgroundColor:backgroundColors,
          hoverOffset: 4
        }]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Distribución de calificaciones en la colección de Netflix (' + ratingsList.length + ' muestras)',
          },
        }
      }
    });
  }
}
