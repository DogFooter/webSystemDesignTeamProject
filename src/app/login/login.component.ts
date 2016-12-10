import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { UserSession } from '../user-session';

import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [ UserService ]
})
export class LoginComponent implements OnInit {
    @Output('user-login') loginEventEmitter: EventEmitter<Boolean> = new EventEmitter<Boolean>();

    user: User;
    userSession: UserSession = UserSession.getInstance();

    change: boolean;

    constructor(private userService: UserService, private router: Router) {
        this.user = new User('','','');
        this.change = false;
    }


    ngOnInit() {
        if (Cookie.get('user'))  {
            alert('이미 로그인되어있습니다.')
            window.location.replace('/main')

        }
    }

    logIn() {
        this.change = false;
        this.userService.logIn(this.user).subscribe(
            data => data.error ? alert(data.error) : (window.location.replace('/main'))&&(Cookie.set('user', data.data.nickname)&&(this.loginEventEmitter.emit(this.change)))
            // data => data.error ? alert('login error') : (this.router.navigate(['/main']))
        );
    }

}
