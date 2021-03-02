import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutMeComponent} from './about-me/about-me.component';
import {EducationComponent} from './education/education.component';
import {WorkExperienceComponent} from './work-experience/work-experience.component';
import {RecentWorkComponent} from './recent-work/recent-work.component';
import {ContactInformationComponent} from './contact-information/contact-information.component';
import {ExtracurricularsComponent} from './extracurriculars/extracurriculars.component';

const routes: Routes = [
  {path: 'about', component: AboutMeComponent},
  {path: 'education', component: EducationComponent},
  {path: 'experience', component: WorkExperienceComponent},
  {path: 'projects', component: RecentWorkComponent},
  {path: 'extracurriculars', component: ExtracurricularsComponent},
  {path: 'contact', component: ContactInformationComponent},
  {path: '**', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  AboutMeComponent,
  EducationComponent,
  WorkExperienceComponent,
  RecentWorkComponent,
  ContactInformationComponent,
  ExtracurricularsComponent
];
