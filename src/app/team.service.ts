import { Injectable } from '@angular/core';
import { Team } from './team';
import { TEAMS } from './teams';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    constructor() { }

    getTeams(): Observable<Team[]> {
        const teams = of(TEAMS);
        return teams;
    }
}
