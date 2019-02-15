import {Component, Input, OnInit} from '@angular/core';
import {Legume} from '../../Legume';

@Component({
  selector: 'app-legume',
  templateUrl: './legume.component.html',
  styleUrls: ['./legume.component.css']
})
export class LegumeComponent implements OnInit {

  @Input()
  instance: Legume;

  constructor() { }

  ngOnInit() {
  }
}
