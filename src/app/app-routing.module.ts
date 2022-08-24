import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeLayoutComponent } from './_layout/home-layout/home-layout.component';

const routes: Routes = [
    {
        path: '',
        component: HomeLayoutComponent,
        children  : [
            {
                path      : '',
                component : HomepageComponent
            },
        ]
    },
    // {
    //     path: '',
    //     component: SiteLayoutComponent,
    //     children  : [
    //         {
    //             path      : 'schedule',
    //             component : ScheduleComponent
    //         },
    //         {
    //             path      : 'speakers',
    //             component : SpeakersComponent
    //         },
    //         {
    //             path      : 'attending',
    //             component : AttendingComponent
    //         },
    //     ]
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
