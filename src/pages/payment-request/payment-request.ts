import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-request',
  templateUrl: 'payment-request.html',
})
export class PaymentRequestPage {
  payment: { id: number; supplierName: string; supplierKey: number; amount: number; notes: string; };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentRequestPage');
    this.payment = {
      id: 1,
      supplierName: 'Osama Soliman',
      supplierKey: 5101,
      amount: 5555,
      notes:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    }
  }

}
