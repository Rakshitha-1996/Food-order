import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  HospitalForm: FormGroup;

  wardsList = ["Normal ward", "special ward"];
  BedList = ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"];
  Foodtype = ["Breakfast" ,  "Lunch" ,"Dinner" ];
  Food = [{ foodtypeId: "Breakfast", food: "Idly vada" }, { foodtypeId: "Breakfast", food: "Dosa" }, { foodtypeId: "Breakfast", food: "puri" }, { foodtypeId: "Breakfast", food: "sandwhich" }
    , { foodtypeId: "Lunch", food: "Meals" }, { foodtypeId:  "Lunch", food: "curdrice" }
    , { foodtypeId: "Dinner", food: "chapathi" }, { foodtypeId: "Dinner", food: "Roti" }]

    get availbleFoods() {
      if (this.HospitalForm.get('Foodtype').value) {
        return this.Food.filter(
          x => x.foodtypeId == this.HospitalForm.get('Foodtype').value
        );
      } else {
        return [];
      }
    }

    onSubmit(){
      console.log(this.HospitalForm.getRawValue())
      var txt;
      var r = confirm(JSON.stringify(this.HospitalForm.getRawValue()));
      if (r == true) {
        txt = "You pressed OK!";
      } else {
        txt = "You pressed Cancel!";
      }
    }

  ngOnInit() {
    this.HospitalForm = new FormGroup({
      wardnumber: new FormControl,
      Bednumber: new FormControl,
      Foodtype: new FormControl,
      Food:new FormControl,
      Date:new FormControl
    })
  }

}
