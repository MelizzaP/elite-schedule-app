import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TeamHome } from '../pages';
import { EliteApi } from '../../app/shared/shared';

@IonicPage()
@Component({
    selector: 'page-teams',
    templateUrl: 'teams.html',
})
export class Teams {

    teams = [];

    constructor(
        private nav: NavController,
        private navParams: NavParams,
        private eliteApi: EliteApi) { }

    ionViewDidLoad() {
        let selectedTourney = this.navParams.data;

        this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
            this.teams = data.teams;
        });
    }

    itemTapped($event, team){
        this.nav.push(TeamHome, team);
    }
}
