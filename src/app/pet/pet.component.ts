import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName = 'KKy';

  petImg = 'https://www.thukieng.com/wp-content/uploads/2018/08/mua-ban-cho-lap-xuong-ha-noi-tphcm-3.jpg';

  updateName(name){
    this.petName = name;
  }

  updateImage(image){
    this.petName = image;
  }

  constructor() { }

  ngOnInit() {
  }

}
