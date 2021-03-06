import { HomePage } from './../home/home';
import { DownloadIdPage } from './../download-id/download-id';
import { PaymentRequestPage } from './../payment-request/payment-request';
import { WalletPage } from './../wallet/wallet';
import { QuestionsPage } from './../questions/questions';
import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = HomePage;
  tab2Root: any = QuestionsPage;
  tab3Root: any = WalletPage;
  tab4Root: any = PaymentRequestPage;
  tab5Root: any = DownloadIdPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
