import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products = [
    {
      image: '/assets/images/product1.jpg',
      name: "schuhe",
      price: 99.99
    },
    {
      image: '/assets/images/product1.jpg',
      name: "schuhe",
      price: 99.99
    },
    {
      image: '/assets/images/product1.jpg',
      name: "schuhe",
      price: 99.99
    },
    {
      image: '/assets/images/product1.jpg',
      name: "schuhe",
      price: 99.99
    },

    
  ]

  constructor() { }

  ngOnInit() {
  }

}
