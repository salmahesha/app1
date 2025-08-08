import { Component } from '@angular/core';
@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  images:string[] =[
    './images/port1.png',
    './images/port2.png',
    './images/port3.png',
    './images/port1.png',
    './images/port2.png',
    './images/port3.png',
  ];
  showImage(e:HTMLDivElement){
    e.classList.remove('d-none');
  }
  removeLayer(e:MouseEvent){
    console.log(e.target , e.currentTarget);
    if(e.target == e.currentTarget){
     (e.target as HTMLDivElement).classList.add('d-none')
    }
}
}
