import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SlotAddPage } from '../slotadd/slotadd';

import { Subscription } from 'rxjs';
import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Slot } from '../../models/slot';

@Component({
  selector: 'slotmanage',
  templateUrl: 'slotmanage.html'
})
export class SlotmanagePage {

  private items:any = [];
  private onResumeSubscription: Subscription;

  constructor(private http: HttpClient, public navCtrl: NavController, platform: Platform) {
  }

  ionViewDidEnter() {
    this.http.get<Slot[]>('http://foelend-svc.azurewebsites.net/api/ForLend/GetLockers').subscribe(result => {
      this.items = result;
      console.log(this.items)
    }, error => console.error(error));
  }

  itemTapped(event, item) {
  }

  addNewSlot(){
    this.navCtrl.push(SlotAddPage);
  }

}
