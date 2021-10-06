import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {
  public username: string = "John Smith";
  public age: number = 23;
  public message: string = "Today is a good day!";
  public isMarried: boolean = false;
  public status: boolean = false;
  public email: string="";
  constructor() { }

  ngOnInit(): void {
  }
  public onInput($event: any){
    console.log($event);
    this.email = $event.target.value;
  }
  public onhover(){
    console.log("mouse over event");
  }
}
