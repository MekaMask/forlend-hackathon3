import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ItemDetail, Slot } from '../../models/slot';

@Component({
  selector: 'item-details-add',
  templateUrl: 'item-details-add.html'
})
export class ItemDetailsAddPage {

  private data: ItemDetail = new ItemDetail();
  private items: Slot[] = [];
  private selectedlocker: any;

  constructor(private http: HttpClient, public navCtrl: NavController) {
    this.http.get<Slot[]>('http://foelend-svc.azurewebsites.net/api/ForLend/GetLockers').subscribe(result => {
      this.items = result;
    }, error => console.error(error));
  }

  public Create(){
    console.log("selectedlocker "+this.selectedlocker);
    this.http.post('http://foelend-svc.azurewebsites.net/api/ForLend/CreateItem', {
      "name": this.data.name,
      "lockerId": this.selectedlocker
    }).subscribe(result => {
      this.navCtrl.pop();
    }, error => console.error(error));
  }

  public Cancel(){
    this.navCtrl.pop();
  }

}
