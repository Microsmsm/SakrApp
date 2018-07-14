import { TabsPage } from './../tabs-page/tabs-page';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  goSignupPage() {
    this.navCtrl.push(SignupPage);
  }
  goTabsPage() {
    this.navCtrl.push(TabsPage)
  }

}
