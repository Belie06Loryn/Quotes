import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-words-form',
  templateUrl: './words-form.component.html',
  styleUrls: ['./words-form.component.css']
})
export class WordsFormComponent implements OnInit {

  newQuote = new Quote(0,"","","",new Date());
  constructor() { }

  ngOnInit() {
  }

}
