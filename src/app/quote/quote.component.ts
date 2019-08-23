import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  kote: Quote []=[
    new Quote(1,'public quot:string','public author:string', 'public name:string', new Date(2019,3,14)),
  ];
  toggle(index){
    this.kote[index].showDescription = !this.kote[index].showDescription;
  }
  deleteQ(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.kote[index].quot}?`)

      if (toDelete){
        this.kote.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
