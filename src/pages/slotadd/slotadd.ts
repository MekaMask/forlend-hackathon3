import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { SlotmanagePage } from '../slotmanage/slotmanage'

@Component({
  selector: 'slotadd',
  templateUrl: 'slotadd.html'
})
export class SlotAddPage {

  private static runningId:number;
  public name:any;
  public row:any;
  public column:any;

  constructor(private http: HttpClient, public navCtrl: NavController) {
  }

  public Create(){
    this.http.post('http://foelend-svc.azurewebsites.net/api/ForLend/CreateLocker',
    { "name": this.name, "row": this.row, "column": this.column }).subscribe(result => {
      this.navCtrl.pop();
    }, error => console.error(error));
  }
}
