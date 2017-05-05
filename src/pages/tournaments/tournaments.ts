import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { MyTeams, Teams } from '../pages';
@IonicPage()
@Component({
    selector: 'page-tournaments',
    templateUrl: 'tournaments.html',
})
export class Tournaments {

    constructor(private nav: NavController) {}

    itemTapped(){
        this.nav.push(Teams);
    }

}
