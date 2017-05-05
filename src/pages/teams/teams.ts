import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { TeamDetail } from '../pages';
@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class Teams {

  constructor(private nav: NavController) {
  }

    itemTapped(){
        this.nav.push(TeamDetail);
    }
}
