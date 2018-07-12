import { TermsPage } from './../terms/terms';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController,ModalController, ViewController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';




@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  didAgree: boolean = false;
  signup: UserOptions = { username: '', dob: new Date(), password: '' };
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData, public modalCtrl: ModalController, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    this.presentModal();
  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.navCtrl.push(TabsPage);
    }
  }
  presentModal() {
    const modal = this.modalCtrl.create(TermsPage);
    modal.present();
    modal.onDidDismiss(({ didAgree }) => {
      console.log('user did agree?' , didAgree);
      if (didAgree) {
        //stay on sign up page
        this.didAgree = true;
        console.log('I will just continue to signup');
      } else {
        console.log('I am poping');
        this.navCtrl.pop();
      }

    })
  }
}
