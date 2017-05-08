import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TeamHome } from '../pages';
import { EliteApi } from '../../app/shared/shared'

@IonicPage()
@Component({
    selector: 'page-game',
    templateUrl: 'game.html',
})
export class Game {
    game: any;

    constructor(
        public nav: NavController,
        public navParams: NavParams,
        private eliteApi: EliteApi) {
    }

    ionViewDidLoad() {
        this.game = this.navParams.data;
    }

    teamTapped(teamId){
        let tourneyData = this.eliteApi.getCurrentTourney();
        let team = tourneyData.teams.find(t => t.id === teamId);
        this.nav.push(TeamHome, team)
    }

}
