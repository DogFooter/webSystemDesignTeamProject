import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule  } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchPannelComponent } from './search-pannel/search-pannel.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { ReadPostComponent } from './read-post/read-post.component';
import { WritePostComponent } from './write-post/write-post.component';
import { WritingPanelComponent } from './writing-panel/writing-panel.component';
import { WritePostHeaderComponent } from './write-post-header/write-post-header.component';
import { IntroPageComponent } from './intro-page/intro-page.component';

import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: 'read/:id', component: ReadPostComponent },
    { path: 'main', component: MainPageComponent },
    { path: '', component: IntroPageComponent },
    { path: 'write', component: WritePostComponent },
    { path: 'register', component: SignUpComponent },
    { path: 'login', component: LoginComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    SearchPannelComponent,
    PostListComponent,
    PostThumbnailComponent,
    ReadPostComponent,
    WritePostComponent,
    WritingPanelComponent,
    WritePostHeaderComponent,
    IntroPageComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCWG67BiV6hB6AW6QMpZqBkAgu9EaKwpcs'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
