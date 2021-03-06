import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/Forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post.service'
import { HttpClientModule } from '@angular/common/http';
import { PostFormComponent } from './components/post-form/post-form.component';
import { HomeComponent } from './components/home/home.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component'



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    PostComponent,
    PostFormComponent,
    HomeComponent,
    PostDetailsComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
