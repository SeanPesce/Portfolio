// Author: Sean Pesce
import * as Globals from './globals';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule, ROUTES } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { EmploymentPageComponent } from './pages/employment/employment.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SocialButtonComponent } from './components/navbar/social-button/social-button.component';
import { ProjectsPageComponent } from './pages/projects/projects.component';
import { SkillsPageComponent } from './pages/skills/skills.component';
import { EducationPageComponent } from './pages/education/education.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { JobCardComponent } from './components/cards/job-card/job-card.component';
import { SchoolCardComponent } from './components/cards/school-card/school-card.component';
import { GooglePlusCardComponent } from './components/cards/google-plus-card/google-plus-card.component';
import { TwitterCardComponent } from './components/cards/twitter-card/twitter-card.component';
import { YoutubeVideoComponent } from './components/youtube-video/youtube-video.component';
import { SocialMediaCardComponent } from './components/cards/social-media-card/social-media-card.component';
import { LanguageSkillCardComponent } from './components/cards/language-skill-card/language-skill-card.component';
import { UtilitySkillCardComponent } from './components/cards/utility-skill-card/utility-skill-card.component';
import { NotImplementedDialogComponent } from './components/dialogs/not-implemented-dialog/not-implemented-dialog.component';
import { NotImplementedComponent } from './components/dev/not-implemented/not-implemented.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    EmploymentPageComponent,
    PageHeaderComponent,
    SocialButtonComponent,
    ProjectsPageComponent,
    SkillsPageComponent,
    EducationPageComponent,
    ContactPageComponent,
    JobCardComponent,
    SchoolCardComponent,
    GooglePlusCardComponent,
    TwitterCardComponent,
    YoutubeVideoComponent,
    SocialMediaCardComponent,
    LanguageSkillCardComponent,
    UtilitySkillCardComponent,
    NotImplementedDialogComponent,
    NotImplementedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule,
    MatToolbarModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  entryComponents: [
    NotImplementedDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
