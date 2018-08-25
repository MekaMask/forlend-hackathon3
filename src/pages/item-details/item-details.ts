import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SlotAddPage } from '../slotadd/slotadd';

import { Subscription } from 'rxjs';
import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ItemDetail } from '../../models/slot';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  
  private items:any = [];
  private onResumeSubscription: Subscription;

  constructor(private http: HttpClient, public navCtrl: NavController, platform: Platform) {
  }

  ionViewDidEnter() {
    this.http.get<ItemDetail[]>('http://foelend-svc.azurewebsites.net/api/ForLend/GetItems').subscribe(result => {
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
