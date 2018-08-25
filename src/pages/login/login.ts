import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavParams, NavController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public static CurrentUsername:string;
  private username:string;

  constructor(public navCtrl: NavController) {

  }

  public static IsLoggedIn(){
    return LoginPage.CurrentUsername!=undefined && LoginPage.CurrentUsername!="";
  }

  Create(){
    if(this.username !=undefined && this.username!=""){
      LoginPage.CurrentUsername = this.username;
      this.navCtrl.setRoot(HelloIonicPage);
    }
  }

}
