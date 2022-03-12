import { Component, OnInit } from '@angular/core';
import { mouse } from '../online_products';

@Component({
  selector: 'app-mouse-item',
  templateUrl: './mouse-item.component.html',
  styleUrls: ['./mouse-item.component.css']
})
export class MouseItemComponent implements OnInit {

  online_products = mouse;

  constructor() { }

  ngOnInit(): void {
  }

}
