import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SlotAddPage } from '../slotadd/slotadd';

@Component({
  selector: 'slotmanage',
  templateUrl: 'slotmanage.html'
})
export class SlotmanagePage {

  public slots:any;

  constructor(public navCtrl: NavController) {
    this.slots = [
      { "id": "s01", "name": "aa" },
      { "id": "s02", "name": "bb" },
    ]
  }

  addNewSlot(){
    this.navCtrl.push(SlotAddPage);
  }

  itemTapped(event, item) {
  }
}
