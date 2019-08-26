export class Quote {
    // id:number;
    // quot:string;
    // author:string;
    // name:string;
    public showDescription: boolean;
    likes: number;
    constructor(public id:number,public author:string,public quot:string, public name:string, public completeDate: Date){
      this.showDescription=false;
    }
}
