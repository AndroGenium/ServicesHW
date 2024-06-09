import { Component } from '@angular/core';
import { ProductsDataService } from './services/products-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ServiceHW';

  constructor(public dataservice : ProductsDataService){}

  info = this.dataservice.data
}
