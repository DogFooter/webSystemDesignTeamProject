import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
    providers: [ UserService ]
})
export class SignUpComponent implements OnInit {

    newUser: User;
    passwordConfirm: String;

    constructor(private userService: UserService, private router: Router) {
        this.newUser = new User('','','');
        this.passwordConfirm ='';
    }

    ngOnInit() {
    }

    signUp() {
        this.userService.signUp(this.newUser).subscribe(
            data => data ? console.log(data) :alert("Sign-Up fail retry please") 
        );
    }

}
