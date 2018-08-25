import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavParams, NavController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { LoginPage } from '../login/login';

@Component({
  selector: 'logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {

  constructor(public navCtrl: NavController) {
    LoginPage.CurrentUsername = "";
    this.navCtrl.setRoot(LoginPage);
  }

}
