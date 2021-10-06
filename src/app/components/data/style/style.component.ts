import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  public username: string = "John Smith";
  public age: number = 23;
  public message: string = "Today is a good day!";
  public isMarried: boolean = false;
  public color: any={
    red: '#FF0000',
    green:'#00FF00',
    blue: '#0000FF'
  }
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
