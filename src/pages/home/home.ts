import { Component } from '@angular/core';
import {NavController, AlertController, LoadingController, Loading} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {DetailPage} from "../detail-page/detail-page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading: Loading;
  items: any;

  constructor(public navCtrl: NavController,public http: Http,
              public alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
  ) {
    this.showLoading();
    this.loadData();
  }

  loadData(){
    this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json()).subscribe(data => {
      this.items = data;
      console.log(data);
      setTimeout(() => {
        this.loading.dismiss();
      });
    },err => {
      console.log("Oops!");
      this.showAlert("Error","Load data error")
      setTimeout(() => {
        this.loading.dismiss();
      });
    });
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
  showAlert(title,message) {
    var alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  showDetail(id){
    //alert(id);
    this.navCtrl.push(DetailPage,{'id':id});
  }

}
