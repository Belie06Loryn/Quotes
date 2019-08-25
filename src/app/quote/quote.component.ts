import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
import * as $ from 'jquery';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
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
  
  constructor() { }

  ngOnInit() {
    $(function(tick) {
      $(".like").click(function() {
          var input = $(this).siblings('.likes');
          $('.like').append(input.val()) + 1;
      });
    
      $(".dislike").click(function() {
          var input = $(this).siblings('.dislikes');
          $('.dislike').append(input.val()) - 1;
      });
    });
  }

}

