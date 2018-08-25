import { Component } from '@angular/core';
import { SlotmanagePage } from '../slotmanage/slotmanage'
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'slotadd',
  templateUrl: 'slotadd.html'
})
export class SlotAddPage {

  private static runningId:number;
  public name:any;
  public row:any;
  public column:any;

  constructor(public navCtrl: NavController) {
    
  }

  public Create(){
    SlotAddPage.runningId++;
    SlotmanagePage.slots.push({ "id": SlotAddPage.runningId, "name": this.name, "row": this.row, "column": this.column });
    this.navCtrl.pop();
  }
}
