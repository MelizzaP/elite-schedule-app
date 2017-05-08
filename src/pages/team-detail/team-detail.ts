import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-team-detail',
    templateUrl: 'team-detail.html',
})
export class TeamDetail {

    team: any;
    constructor(
        private nav: NavController,
        private navParams: NavParams) {
        this.team = this.navParams.data;
    }
}
