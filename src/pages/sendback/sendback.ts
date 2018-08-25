import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavParams, NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'sendback',
  templateUrl: 'sendback.html'
})
export class SendBackPage {

  public selectedItemId:any;
  public selectedItemName:any;
  public attestor:string;
  public qrImageURL:string;

  constructor(private http: HttpClient,public navParams: NavParams,public navCtrl: NavController) {
    this.selectedItemId = navParams.get('item')._id;
    this.selectedItemName = navParams.get('item').name;
    this.qrImageURL = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chld=H&chl="+this.selectedItemId;
  }

  Create(){
    this.http.post('http://foelend-svc.azurewebsites.net/api/ForLend/SendBackItem', {
      "itemId": this.selectedItemId,
      "lendBy": LoginPage.CurrentUsername,
      "witnessBy": this.attestor
    }).subscribe(result => {
      this.navCtrl.pop();
    }, error => console.error(error));
  }

}
