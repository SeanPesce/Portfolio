// Author: Sean Pesce
import * as Globals from './globals';
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
  { path: '',                                                   component: HomePageComponent       },
  { path: Globals.PAGE_ROUTES[Globals.PortfolioPage.HOME],      component: HomePageComponent       },
  { path: Globals.PAGE_ROUTES[Globals.PortfolioPage.PROJECTS],  component: ProjectsPageComponent   },
  { path: Globals.PAGE_ROUTES[Globals.PortfolioPage.SKILLS],    component: SkillsPageComponent     },
  { path: Globals.PAGE_ROUTES[Globals.PortfolioPage.EDUCATION], component: EducationPageComponent  },
  { path: Globals.PAGE_ROUTES[Globals.PortfolioPage.WORK],      component: EmploymentPageComponent },
  { path: Globals.PAGE_ROUTES[Globals.PortfolioPage.CONTACT],   component: ContactPageComponent    }
];
