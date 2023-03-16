import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addItem(equipment): boolean {
    cargoHold.push(equipment);
    cargoMass += equipment.mass;
    if (cargoMass - maximumAllowedMass <= 200){
      return true;
    } else {return false}
  }

}
