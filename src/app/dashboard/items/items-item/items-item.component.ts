import { Component, OnInit, Input } from '@angular/core';
import { Item } from  '../item.model';
@Component({
  selector: 'app-items-item',
  templateUrl: './items-item.component.html',
  styleUrls: ['./items-item.component.scss']
})
export class ItemsItemComponent implements OnInit {

  @Input('currentItem')item;

  constructor() { }

  ngOnInit() {
  }

}
