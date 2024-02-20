import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  buyList = [
    {
      name: 'Compra 1',
      date: new Date(),
      price: 1000
    },
    {
      name: 'Compra 2',
      date: new Date(),
      price: 2000
    },
    {
      name: 'Compra 3',
      date: new Date(),
      price: 3000
    }
  ]
}
