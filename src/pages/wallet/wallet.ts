import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
  transactions: { timeStamp: string; to: string; }[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
    for (let i = 0; i < 10; i++){
      this.transactions.push(
        { timeStamp: new Date().toTimeString(), to: `${i} Jhon Doe` }
      )
    }
  }

}
