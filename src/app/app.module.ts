import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ItemDetailsAddPage } from '../pages/item-details-add/item-details-add';
import { ListPage } from '../pages/list/list';
import { SlotmanagePage } from '../pages/slotmanage/slotmanage';
import { SlotAddPage } from '../pages/slotadd/slotadd';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RentPage } from '../pages/rent/rent';
import { SendBackPage } from '../pages/sendback/sendback';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ItemDetailsAddPage,
    ListPage,
    RentPage,
    SendBackPage,
    SlotmanagePage,
    SlotAddPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    RentPage,
    SendBackPage,
    ItemDetailsPage,
    ItemDetailsAddPage,
    ListPage,
    SlotmanagePage,
    SlotAddPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
