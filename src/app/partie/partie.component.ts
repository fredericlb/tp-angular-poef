import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})
export class PartieComponent implements OnInit {

  saisie = '';

  @Output()
  result = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.result.emit(this.saisie === 'verbe');
    /*if (this.saisie === 'verbe') {
      this.result.emit(true);
    } else {
      this.result.emit(false);
    }*/
  }

}
