import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { MyTeams, Game, Teams, TeamDetail, Tournaments, Standings, TeamHome } from '../pages/pages';
import { EliteApi } from './shared/shared';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        MyTeams,
        Game,
        Teams,
        TeamDetail,
        Tournaments,
        TeamHome,
        Standings,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MyTeams,
        Game,
        Teams,
        TeamDetail,
        Tournaments,
        TeamHome,
        Standings,
    ],
    providers: [
        StatusBar,
        EliteApi,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
