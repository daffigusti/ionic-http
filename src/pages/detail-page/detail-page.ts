import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, LoadingController, Loading} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {MapPage} from "../map-page/map-page";
/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-detail-page',
    templateUrl: 'detail-page.html',
})
export class DetailPage {
    loading: Loading;
    id = '';
    user = {
        name: '-',
        username: '-',
        email: '-',
        address: { street: '', suite: '', city: '', zipcode: '',geo:{lat:0,lng:0} },
        phone: '-',
        website: ''
    };

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public http: Http,
                public alertCtrl: AlertController,
                private loadingCtrl: LoadingController,) {
        this.id = navParams.get("id");

        this.showLoading();
        this.loadData();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DetailPage');

    }


    loadData() {
        this.http.get('https://jsonplaceholder.typicode.com/users/' + this.id).map(res => res.json()).subscribe(data => {
            this.user = data;
            console.log(data);
            setTimeout(() => {
                this.loading.dismiss();
            });
        }, err => {
            console.log("Oops!");
            this.showAlert("Error", "Load data error")
            setTimeout(() => {
                this.loading.dismiss();
            });
        });
    }

    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loading.present();
    }

    showAlert(title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }

    showMap(lat,long){
        this.navCtrl.push(MapPage,{lat:lat,long:long});
    }



}
