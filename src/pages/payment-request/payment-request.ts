import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentsDataProvider } from '../../providers/payments-data/payments-data';

/**
 * Generated class for the PaymentRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface IPayment{
  id:string
  amount: number,
  supplierName: string,
  supplierKey: string,
  notes: string
}
@IonicPage()
@Component({
  selector: 'page-payment-request',
  templateUrl: 'payment-request.html',
})
export class PaymentRequestPage {
  // payment: { id: number; supplierName: string; supplierKey: number; amount: number; notes: string; };
  payments: IPayment[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public paymentsProvider: PaymentsDataProvider) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentRequestPage');
    this.showPayments();
    console.log(111);
  }

  showPayments() {
    //TODO: change API to get all payments and details of
    this.paymentsProvider.getPaymnets(122).subscribe((result: IPayment[]) => {
      console.log(result);
      this.payments = result
    })

  }

}
