import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  public username: string = "John Smith";
  public age: number = 23;
  public message: string = "Today is a good day!";
  public isMarried: boolean = false;
  public status: boolean = false;
  public email: string="";
 
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.username);
    this.status = !this.status;
  }
  public onInput($event: any){
    console.log($event);
    this.email = $event.target.value;
  }

  public onhover(){
    console.log("mouse over event");
  }
}
