import { HttpClientModule } from '@angular/common/http';
import { QrScannerPage } from './../pages/qr-scanner/qr-scanner';
import { DownloadIdPage } from './../pages/download-id/download-id';
import { PaymentRequestPage } from './../pages/payment-request/payment-request';
import { WalletPage } from './../pages/wallet/wallet';
import { QuestionsPage } from './../pages/questions/questions';
import { HomePage } from './../pages/home/home';
import { TermsPage } from './../pages/terms/terms';
import { WelcomePage } from './../pages/welcome/welcome';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

import { QRCodeModule } from 'angularx-qrcode';

import { QRScanner } from '@ionic-native/qr-scanner';
import { PaymentsDataProvider } from '../providers/payments-data/payments-data';
import { QuestionsDataProvider } from '../providers/questions-data/questions-data';
import { WalletsDataProvider } from '../providers/wallets-data/wallets-data';


@NgModule({
  declarations: [
    ConferenceApp,
    WelcomePage,
    HomePage,
    QuestionsPage,
    WalletPage,
    PaymentRequestPage,
    DownloadIdPage,
    QrScannerPage,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    TermsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: QuestionsPage, name: 'Questions', segment: 'questions' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: QrScannerPage, name: 'Qr Scanner', segment: 'qr-scanner' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: WelcomePage, name: 'Welcome', segment: 'welcome' },
        { component: HomePage, name: 'Home', segment: 'home' },
      ],
    }),
    IonicStorageModule.forRoot(),
    QRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    WelcomePage,
    HomePage,
    QuestionsPage,
    WalletPage,
    PaymentRequestPage,
    DownloadIdPage,
    QrScannerPage,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    TermsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
    QRScanner,
    PaymentsDataProvider,
    QuestionsDataProvider,
    WalletsDataProvider,
  ]
})
export class AppModule { }
