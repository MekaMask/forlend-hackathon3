import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SlotAddPage } from '../slotadd/slotadd';

import { Subscription } from 'rxjs';
import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Slot, ItemDetail } from '../../models/slot';
import { ItemDetailsAddPage } from '../item-details-add/item-details-add';
import { ItemDetailsPage } from '../item-details/item-details';
import { RentPage } from '../rent/rent';
import { SendBackPage } from '../sendback/sendback';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  private items:any = [];
  private onResumeSubscription: Subscription;

  constructor(private http: HttpClient, public navCtrl: NavController, platform: Platform) {
  }

  ionViewDidEnter() {
    this.http.get<ItemDetail[]>('http://foelend-svc.azurewebsites.net/api/ForLend/GetItems/au').subscribe(result => {
      this.items = result;
      console.log(this.items)
    }, error => console.error(error));
  }

  addNewSlot(){
    this.navCtrl.push(ItemDetailsAddPage);
  }

  selectItem(item){
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  Rent(data){
    console.log(data)
    this.navCtrl.push(RentPage, {
      item: data
    });
  }

  Refund(data){
    this.navCtrl.push(SendBackPage, {
      item: data
    });
  }

}
