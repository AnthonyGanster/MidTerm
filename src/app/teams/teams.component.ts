import { Component, OnInit } from '@angular/core';
import { Team } from "../team";
import { TeamService } from '../team.service';
import { TEAMS } from '../teams';

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
    selectedTeam?: Team;
    teams = TEAMS;

    constructor(private teamService: TeamService) { }

    ngOnInit(): void {
        this.getTeams();
    }

    onSelect(team: Team): void {
        this.selectedTeam = team;
    }

    getTeams(): void {
        this.teamService.getTeams()
            .subscribe(teams => this.teams = teams);
    }
}
