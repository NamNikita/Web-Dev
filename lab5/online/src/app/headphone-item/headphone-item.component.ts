import { Component, OnInit } from '@angular/core';
import { headphone } from '../online_products';

@Component({
  selector: 'app-headphone-item',
  templateUrl: './headphone-item.component.html',
  styleUrls: ['./headphone-item.component.css']
})
export class HeadphoneItemComponent implements OnInit {

  online_products = headphone;

  constructor() { }

  ngOnInit(): void {
  }

}
