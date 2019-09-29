import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from 'src/common/app-error-handler';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';
import { GithubprofilecomponentComponent } from './githubprofile/githubprofilecomponent.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GithubFollowersService } from './github-followers.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './services/auth-guard.service';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AboutComponent } from './about/about.component';
import { ZippyComponent } from './zippy/zippy.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    PostComponent,
    NavbarComponent,
    GithubprofilecomponentComponent,
    LoginComponent,
    AdminComponent,
    NoAccessComponent,
    AboutComponent,
    ZippyComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    // RouterModule.forRoot(
    //   [
    //     {path: '', component: HomeComponent},
    //     {path: 'profile/:id ', component: GithubprofilecomponentComponent},
    //     {path: 'followers', component: GithubfollowersComponent},
    //     {path: 'posts ', component: PostComponent},
    //     {path: '**', component: NotfoundComponent}
    //   ]
    // )
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent},
        {path: 'admin', component: AdminComponent , canActivate: [AuthGuard, AdminAuthGuardService]},
        {path: 'login', component: LoginComponent},
        {path: 'no-access ', component: NoAccessComponent},
      ]
    )
  ],
  providers: [
    PostService,
    AuthService,
    AuthGuard,
    AdminAuthGuardService,
    GithubFollowersService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
