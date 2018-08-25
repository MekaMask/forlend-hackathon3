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

  constructor(private http: HttpClient, public navCtrl: NavController) {
    this.http.get<Slot[]>('http://foelend-svc.azurewebsites.net/api/ForLend/GetLockers').subscribe(result => {
      this.items = result;
    }, error => console.error(error));
  }

  public Create(){
    console.log(this.data);
    this.http.post('http://foelend-svc.azurewebsites.net/api/ForLend/CreateItem', this.data).subscribe(result => {
      this.navCtrl.pop();
    }, error => console.error(error));
  }

  public Cancel(){
    this.navCtrl.pop();
  }

}
