import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as _ from 'lodash';

import { Game } from '../pages'
import { EliteApi } from '../../app/shared/shared';

@IonicPage()
@Component({
    selector: 'page-team-detail',
    templateUrl: 'team-detail.html',
})
export class TeamDetail {
    team: any;
    games: any;
    private tourneyData: any;

    constructor(
        private nav: NavController,
        private navParams: NavParams,
        private eliteApi: EliteApi) {
        this.team = this.navParams.data;
    }

    ionViewDidLoad(){
        this.team = this.navParams.data;
        this.tourneyData = this.eliteApi.getCurrentTourney();

        this.games = _.chain(this.tourneyData.games)
                        .filter(game => game.team1Id === this.team.id || game.team2Id === this.team.id)
                        .map(game => {
                            let isTeam1 = (game.team1Id === this.team.id);
                            let opponentName = isTeam1 ? game.team2 : game.team1;
                            let scoreDisplay = this.getScoreDisplay(isTeam1, game.team1Score, game.team2Score);
                            return {
                                gameId: game.id,
                                opponent: opponentName,
                                time: Date.parse(game.time),
                                location: game.location,
                                locationUrl: game.locationUrl,
                                scoreDisplay: scoreDisplay,
                                homeAway: (isTeam1 ? "vs." : "at")
                            };
                        })
                        .value();
    }

    getScoreDisplay(isTeam1, team1Score, team2Score){
        if(team1Score && team2Score) {
            const teamScore = (isTeam1 ? team1Score : team2Score);
            const opponentScore = (isTeam1 ? team2Score : team1Score);
            const winIndicator = teamScore > opponentScore ? "W: " : "L: ";
            return winIndicator + teamScore + '-' + opponentScore;
        } else {
            return '';
        }
    }

    gameClicked($event, game) {
        let sourceGame = this.tourneyData.games.find(g => g.id === game.gameId);
        this.nav.parent.parent.push(Game, sourceGame);
    }
}
