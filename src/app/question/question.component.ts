import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Verbe} from '../../Verbe';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  verbe: Verbe;

  @Output()
  answered = new EventEmitter<boolean>();

  preterit = '';
  participePasse = '';


  constructor() { }

  ngOnInit() {
  }

  validate() {
    const won = this.verbe.preterit === this.preterit &&
      this.verbe.participePasse === this.participePasse;
    this.participePasse = '';
    this.preterit = '';
    this.answered.emit(won);
  }

}
