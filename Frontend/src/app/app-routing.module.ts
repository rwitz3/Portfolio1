
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgxSpinnerModule } from "ngx-spinner";
import { SkillsComponent } from './skills/skills.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [{path:'about',component:AboutComponent},
                        {path:'landing-page',component:LandingPageComponent},
                        {path:'skills',component:SkillsComponent},
                        {path:'qualifications',component:QualificationsComponent},
                        {path:'testimonials',component:TestimonialsComponent},
                        {path:'contact',component:ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            BrowserAnimationsModule,
           NgxSpinnerModule,],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule { }
