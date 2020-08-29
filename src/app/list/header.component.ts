import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() { }
   isDaily= 'All'
   isListView:boolean = false;
  
  @Output() onRadiochange = new EventEmitter()
  @Output() toggleList = new EventEmitter() ;


  ngOnInit(): void {
  }
  handleChangeFilter(e) {
    var target = e.target;
    if (target.checked) {
      var value = target.value;
      this.isDaily = value ;
      this.onRadiochange.emit(value)
  }
}
  toggleListView(e) {
    this.isListView = !this.isListView;
    this.toggleList.emit(e.checked)
  }

}
