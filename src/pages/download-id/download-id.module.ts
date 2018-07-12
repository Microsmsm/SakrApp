import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DownloadIdPage } from './download-id';

@NgModule({
  declarations: [
    DownloadIdPage,
  ],
  imports: [
    IonicPageModule.forChild(DownloadIdPage),
  ],
})
export class DownloadIdPageModule {}
