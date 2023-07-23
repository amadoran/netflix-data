import { Component } from '@angular/core';
import { Collection } from '../interfaces/collection';
import { DatagetterService } from '../servicios/datagetter.service';

@Component({
  selector: 'app-tablefilm',
  templateUrl: './tablefilm.component.html',
  styleUrls: ['./tablefilm.component.css']
})
export class TablefilmComponent {
  public data: Collection[] = [];
  constructor(private dataProvider: DatagetterService){}

  ngOnInit(){
    this.dataProvider.getResponse().subscribe(response => {
      this.data = (response as Collection[]).slice(0, 30)
    })
  }
}
