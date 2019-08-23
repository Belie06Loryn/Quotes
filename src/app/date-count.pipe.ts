import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let day:Date = new Date();
    let time:any = new Date(day.getFullYear(), day.getMonth(), day.getDate())
    var dates = Math.abs(value - time) 
    const secondsInDay = 86400; 
    var seconds = dates*0.001; 
    var counter = seconds/secondsInDay;

    if (counter >= 1 && value > time){
      return counter;
    }else{
      return 0;
    }
  }

}
