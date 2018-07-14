import { WalletsDataProvider } from './../../providers/wallets-data/wallets-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface ITransaction {
  timeStamp: string;
  to: string;
}
export interface IBalance {
  balance: number;
}
@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
  transactions: ITransaction[] = [];
  balance: number;


  constructor(public navCtrl: NavController, public navParams: NavParams,public wallets:WalletsDataProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');

    //fake data
    /*for (let i = 0; i < 10; i++){
      this.transactions.push(
        { timeStamp: new Date().toTimeString(), to: `${i} Jhon Doe` }
      )
    }*/
    this.showTransactions();
    this.showBalance();
  }

  showTransactions() {
    this.wallets.getWalletsData().subscribe((result: ITransaction[]) => {
      this.transactions = result
    })
  }
  showBalance() {
    this.wallets.getBalance().subscribe((result:IBalance) => {
      console.log(result);
      this.balance = result.balance;
    })
  }

}
