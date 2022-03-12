import { Component, OnInit } from '@angular/core';
import { keyboard } from '../online_products';

@Component({
  selector: 'app-keyboard-item',
  templateUrl: './keyboard-item.component.html',
  styleUrls: ['./keyboard-item.component.css']
})
export class KeyboardItemComponent implements OnInit {

  online_products = keyboard;

  constructor() { }

  ngOnInit(): void {
  }

}
