import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SlotAddPage } from '../slotadd/slotadd';

import { Subscription } from 'rxjs';
import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Slot, ItemDetail } from '../../models/slot';


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
    this.http.get<ItemDetail[]>('http://foelend-svc.azurewebsites.net/api/ForLend/GetItems').subscribe(result => {
      this.items = result;
      console.log(this.items)
    }, error => console.error(error));
  }

}
