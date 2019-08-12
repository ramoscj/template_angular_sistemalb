import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Estudiante, PerfilEstidante, UserWork, UserContacts, UserSocial, UserSettings } from './user.model';
import { UsersService } from './users.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ UsersService ]
})
export class UsersComponent implements OnInit {
    public users: Estudiante[];
    public searchText: string;
    public page: any;
    public settings: Settings;
    public showSearch = false;
    public viewType = 'grid';
    constructor(public appSettings: AppSettings,
                public dialog: MatDialog,
                public usersService: UsersService){
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.getUsers();
    }

    public getUsers(): void {
        this.users = null; // for show spinner each time
        this.usersService.listarEstudiantes().subscribe(users => this.users = users);
    }
    public addUser(user: Estudiante){
        this.usersService.agregarEstudiante(user).subscribe(user => this.getUsers());
    }
    public updateUser(user: Estudiante){
        this.usersService.actualizarEstudiante(user).subscribe(user => this.getUsers());
    }
    public deleteUser(user: Estudiante){
       this.usersService.eliminarEstudiante(user.id).subscribe(user => this.getUsers());
    }

    public changeView(viewType){
        this.viewType = viewType;
        this.showSearch = false;
    }

    public onPageChanged(event){
        this.page = event;
        this.getUsers();
        document.getElementById('main').scrollTop = 0;
    }

    public openUserDialog(user){
        let dialogRef = this.dialog.open(UserDialogComponent, {
            data: user
        });
        dialogRef.afterClosed().subscribe(user => {
            if (user) {
                (user.id) ? this.updateUser(user) : this.addUser(user);
            }
        });
        this.showSearch = false;
    }

}