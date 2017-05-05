import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import  { Tournaments }  from '../pages';

@IonicPage()
@Component({
    selector: 'page-my-teams',
    templateUrl: 'my-teams.html',
})
export class MyTeams {

    constructor(private nav: NavController) {
    }

    goToTournaments() {
        this.nav.push(Tournaments);
    }

}
