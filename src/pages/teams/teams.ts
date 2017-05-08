import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { TeamHome } from '../pages';

@IonicPage()
@Component({
    selector: 'page-teams',
    templateUrl: 'teams.html',
})
export class Teams {

    teams = [
        { id: 1, name: 'HC Elite' },
        { id: 2, name: 'Team Takeover' },
        { id: 3, name: 'DC Thunder' },
    ];

    constructor(private nav: NavController) {
    }

    itemTapped($event, team){
        this.nav.push(TeamHome, team);
    }
}
