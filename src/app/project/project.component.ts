import { Component } from '@angular/core';

import { Collection } from '../interfaces/collection';
import { DatagetterService } from '../servicios/datagetter.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  public data: Collection[] = [];
  constructor(private dataProvider: DatagetterService){}

  ngOnInit(){
    this.dataProvider.getResponse().subscribe(response => {
      this.data = (response as Collection[]).slice(0, 10)
    })
  }
}
