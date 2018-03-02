// Author: Sean Pesce
import { ContactPageComponent } from './pages/contact/contact.component';
import { EducationPageComponent } from './pages/education/education.component';
import { EmploymentPageComponent } from './pages/employment/employment.component';
import { HomePageComponent } from './pages/homepage/homepage.component';
import { ProjectsPageComponent } from './pages/projects/projects.component';
import { SkillsPageComponent } from './pages/skills/skills.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

export const ROUTES: Routes = [
  { path: '',           component: HomePageComponent       },
  { path: 'about',      component: HomePageComponent       },
  { path: 'projects',   component: ProjectsPageComponent   },
  { path: 'skills',     component: SkillsPageComponent     },
  { path: 'education',  component: EducationPageComponent  },
  { path: 'employment', component: EmploymentPageComponent },
  { path: 'contact',    component: ContactPageComponent    }
];
