import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Verbe} from '../../Verbe';
import {GameService} from '../game.service';

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


  constructor(public gameService: GameService) { }

  ngOnInit() {
  }

  validate() {
    const won = this.gameService.updateScore(
        this.verbe, this.preterit, this.participePasse);
    if (won !== won) {
      console.log('quelle erreur étrange');
    }
    this.participePasse = '';
    this.preterit = '';
    this.answered.emit();
  }

}
