import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SlotAddPage } from '../slotadd/slotadd';

import { Subscription } from 'rxjs';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'slotmanage',
  templateUrl: 'slotmanage.html'
})
export class SlotmanagePage {

  public static slots:any = [];
  private items:any = [];
  private onResumeSubscription: Subscription;

  constructor(public navCtrl: NavController, platform: Platform) {
    console.log(SlotmanagePage.slots)
    this.onResumeSubscription = platform.resume.subscribe(() => {
      console.log("A");
   }); 
  }

  ionViewDidEnter() {
    this.items = SlotmanagePage.slots;
  }

  itemTapped(event, item) {
  }

  addNewSlot(){
    this.navCtrl.push(SlotAddPage);
  }

}
