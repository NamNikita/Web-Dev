import { Component, OnInit } from '@angular/core';
import { laptop } from '../online_products';

@Component({
  selector: 'app-laptop-item',
  templateUrl: './laptop-item.component.html',
  styleUrls: ['./laptop-item.component.css']
})
export class LaptopItemComponent implements OnInit {

  online_products = laptop;

  constructor() { }

  ngOnInit(): void {
  }

}
