import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner';
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the QrScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({selector: 'page-qr-scanner', templateUrl: 'qr-scanner.html'})
export class QrScannerPage {
  scanResult: string = ''

  constructor(public navCtrl : NavController, public navParams : NavParams, private qrScanner : QRScanner) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrScannerPage');
    // Optionally request the permission early
  }
  doScan() {
    this
      .qrScanner
      .prepare()
      .then((status : QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted start scanning
          let scanSub = this
            .qrScanner
            .scan()
            .subscribe((text : string) => {
              console.log('Scanned something', text);
              this.scanResult = text;

              this
                .qrScanner
                .hide(); // hide camera preview
              scanSub.unsubscribe(); // stop scanning
            });

        } else if (status.denied) {
          // camera permission was permanently denied you must use
          // QRScanner.openSettings() method to guide the user to the settings page then
          // they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again
          // at a later time.
        }
      })
      .catch((e : any) => console.log('Error is', e));
  }
}
