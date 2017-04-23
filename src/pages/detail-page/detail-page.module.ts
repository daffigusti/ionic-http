import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DetailPage } from './detail-page';

@NgModule({
  declarations: [
    DetailPage,
  ],
  imports: [
  //  IonicModule.forChild(DetailPage),
  ],
  exports: [
    DetailPage
  ]
})
export class DetailPageModule {}
