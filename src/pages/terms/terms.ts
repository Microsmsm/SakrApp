import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }
  dismiss() {
    this.viewCtrl.dismiss({
      didAgree:false
    })
  }

  doAgree() {
    this.viewCtrl.dismiss({
      didAgree:true
    })
  }

}
