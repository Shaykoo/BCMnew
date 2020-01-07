import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public addFormisCollapsed = true;
  public uploadIsCollapsed = true;
  public downloadIsCollapsed = true;


  constructor() { }

  ngOnInit() {
  }

}
