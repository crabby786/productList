import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class CardComponent implements OnChanges {

  constructor() { }
  @Input() item:any ;
  
  ngOnChanges(changes: SimpleChanges) {}

}
