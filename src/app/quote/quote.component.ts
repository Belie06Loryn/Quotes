import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
import * as $ from 'node_modules/jquery'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  na:number
  lo:number
  counter:number;
  kote: Quote []=[
    new Quote(1,'Belie Loryn','We always have millions words but we find it difficult to express it in few lines,but also can be described in One picture:)', 'Alexie_Manirakora', new Date(2019,1,14)),
    new Quote(2,'Belie Loryn','The words come from mind and flow through the veins to the pen and be executed on the paper #real Gun of the writers', 'Alexie_Manirakora', new Date(2019,3,14)),
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

  addNewQuote (kotas){
    let kotasLength = this.kote.length;
    kotas.id = kotasLength+1;
    this.kote.push(kotas)
  }
  
  highest(){
    this.na = 0
    this.lo = 0

    for(this.counter=0 ; this.counter < this.kote.length; this.counter++) {
      this.lo = this.kote[this.counter].likes;
      if(this.lo > this.na){this.na = this.lo}
    }
    return  this.na
  }
  constructor() { }

  ngOnInit() {
    $(function () {
      $(".like").click(function () {
          var input = $(this).find('.likes');
          input.val(parseInt(input.val())+ 1);
      });
  $(".dislike").click(function () {
      var input = $(this).find('.dislikes');
      input.val(input.val() - 1);
  });
});
  }

}

