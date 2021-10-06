import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  //data
  public username: string = "John Smith";
  public age: number = 23;
  public message: string = "Today is a good day!";
  public isMarried: boolean = false;
  public product :any = {
    id: 101010101,
    name: "macbook",
    price: 839243842.12,
    status: true,
    desc: "It is a wonderfull laptop"
  }

  public orders: any = ["Pizza Orders", "KFC Orders", "Biryani Orders"]


  constructor() { }

  ngOnInit(): void {
  }

}
