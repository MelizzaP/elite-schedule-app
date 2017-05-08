import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';

import { Teams } from '../pages';
import { EliteApi } from '../../app/shared/shared';

@IonicPage()
@Component({
    selector: 'page-tournaments',
    templateUrl: 'tournaments.html',
})
export class Tournaments {

    tournaments: any;
    constructor(
        private nav: NavController,
        private eliteApi: EliteApi,
        private loadingController: LoadingController) {}

    itemTapped($event, tourney){
        this.nav.push(Teams, tourney);
    }

    ionViewDidLoad() {
        let loader = this.loadingController.create({
            content: 'Fetching Tournaments!',
        });

        loader.present().then(() => {
            this.eliteApi.getTournaments().then(data => {
                this.tournaments = data;
                loader.dismiss();
            });
        });
    }
}
