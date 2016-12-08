import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from '../user';
import { UserSession } from '../user-session';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UserStorage } from '../user-storage';

import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
    providers: [UserService]
})
export class NavBarComponent implements OnInit, OnChanges {

    change: boolean;
    user: string;
    show_login: boolean;


    constructor(private userService: UserService, private router: Router) {
        this.show_login = false;
    }

    ngOnChanges() {
        this.show_login = false;
        this.user = Cookie.get('user');
    }

    ngOnInit() {
        this.loggedIn();

    }

    logOut() {
        console.log(Cookie.get('user'))
        this.userService.logOut(Cookie.get('user')).subscribe(
        // this.userService.logOut('ss').subscribe(
            data => data.error ? alert(data.error) :((this.router.navigate(['/main']))&&Cookie.delete('user')&&(this.user=''))
            // data => data.error ? alert('logout error') : (this.router.navigate(['/main']))
        );
    }

    loggedIn() {

        this.userService.loggedIn().subscribe(
            data => this.user = data.data
        );
    }



}
