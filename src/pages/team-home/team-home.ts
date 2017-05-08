import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Standings, TeamDetail, MyTeams } from '../pages';

@IonicPage()
@Component({
    selector: 'page-team-home',
    templateUrl: 'team-home.html',
})
export class TeamHome {

    team: any;
    teamDetailTab = TeamDetail;
    standingsTab = Standings;

    constructor(public nav: NavController, public navParams: NavParams) {
        this.team = this.navParams.data;
    }

    goHome() {
        this.nav.popToRoot();
    }
}
