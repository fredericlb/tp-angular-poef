import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  @Input()
  nombre: number;

  @Output()
  changed = new EventEmitter<number>();

  nombreSaisi = 1;

  constructor() { }

  ngOnInit() {
  }

  valueHasChanged() {
    this.changed.emit(this.nombreSaisi);
  }

}
