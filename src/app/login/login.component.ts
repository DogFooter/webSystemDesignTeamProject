import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [ UserService ]
})
export class LoginComponent implements OnInit {

    user: User;

    constructor(private userService: UserService, private router: Router) {
        this.user = new User('','','');
    }


    ngOnInit() {
    }

    logIn() {
        this.userService.logIn(this.user).subscribe(
            data => data.error ? alert('login error') : (this.router.navigate(['/main']))&&(console.log(data))
        );
    }
}
