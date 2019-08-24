import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-words-form',
  templateUrl: './words-form.component.html',
  styleUrls: ['./words-form.component.css']
})
export class WordsFormComponent implements OnInit {
  newQuote = new Quote(0,"","","",new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit() {
  }

}
