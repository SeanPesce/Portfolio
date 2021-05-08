// Author: Sean Pesce
import * as Globals from './globals';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SoftwareSkillCardComponent } from './components/cards/software-skill-card/software-skill-card.component';
import { EmailFormComponent } from './components/forms/email-form/email-form.component';
import { UniformImageComponent } from './components/uniform-image/uniform-image.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { ProjectShowcaseComponent } from './components/project-showcase/project-showcase.component';
import { ImageExpandDialogComponent } from './components/dialogs/image-expand-dialog/image-expand-dialog.component';

// Pipes
import { SafeHtmlPipe } from './pipes/safe-html/safe-html.pipe';
import { VideoComponent } from './components/video/video.component';
import { VideoSlideshowComponent } from './components/video-slideshow/video-slideshow.component';


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
    NotImplementedComponent,
    SoftwareSkillCardComponent,
    EmailFormComponent,
    UniformImageComponent,
    SlideshowComponent,
    ProjectShowcaseComponent,
    ImageExpandDialogComponent,
    SafeHtmlPipe,
    VideoComponent,
    VideoSlideshowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES, { useHash: true, relativeLinkResolution: 'legacy' })
  ],
  entryComponents: [
    ImageExpandDialogComponent,
    NotImplementedDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
