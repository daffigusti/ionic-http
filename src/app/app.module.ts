import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {DetailPage} from "../pages/detail-page/detail-page";
import {MapPage} from "../pages/map-page/map-page";
import {GoogleMaps} from "@ionic-native/google-maps";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        DetailPage,
        MapPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        DetailPage,
        MapPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        GoogleMaps,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
