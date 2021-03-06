import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SlotAddPage } from '../slotadd/slotadd';

import { Subscription } from 'rxjs';
import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ItemDetail, Slot, ItemLog } from '../../models/slot';
import { ItemDetailsAddPage } from '../item-details-add/item-details-add';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  
  public selectedItemId:any;
  public selectedItemName:any;
  public selectedItemSlotName:any;
  private items: Slot[] = [];
  private selectedlocker: any;
  private itemLog: ItemLog;

  constructor(public alertCtrl: AlertController, private http: HttpClient, public navCtrl: NavController, platform: Platform, public navParams: NavParams) {
    this.selectedItemId = navParams.get('item')._id;
    this.selectedItemName = navParams.get('item').name;
    this.selectedItemSlotName = navParams.get('item').locker.name;
    this.selectedlocker = navParams.get('item').locker._id;
    console.log(this.selectedItemSlotName)

    this.http.get<Slot[]>('http://foelend-svc.azurewebsites.net/api/ForLend/GetLockers').subscribe(result => {
      this.items = result;
    }, error => console.error(error));

    console.log(this.selectedItemId);
    this.http.get<ItemLog>('http://foelend-svc.azurewebsites.net/api/ForLend/GetLendItem/'+this.selectedItemId).subscribe(result => {
      this.itemLog = result;
      console.log("AAA: "+this.itemLog)
    }, error => console.error(error));
  }

  Edit(){
    this.http.post('http://foelend-svc.azurewebsites.net/api/ForLend/UpdateItem', {
      "itemid": this.selectedItemId,
      "name": this.selectedItemName,
      "lockerId": this.selectedlocker
    }).subscribe(result => {
      this.navCtrl.pop();
    }, error => console.error(error));
  }

  Delete(){
    const confirm = this.alertCtrl.create({
      title: 'ลบ?',
      message: 'คุณต้องการจะทำการลบของ ' +this.selectedItemName+ ' ชิ้นนี้หรือไม่?',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'ลบ',
          handler: () => {
            this.http.get<ItemLog>('http://foelend-svc.azurewebsites.net/api/ForLend/DeleteItem/'+this.selectedItemId).subscribe(result => {
              this.navCtrl.pop();
            }, error => console.error(error));
          }
        }
      ]
    });
    confirm.present();
  }
}
