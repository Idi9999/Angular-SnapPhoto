import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page.component';



const routes: Routes = [
    { path: 'facesnaps', loadChildren: () => import('./face-snapsc/face-snapsc.module').then(m => m.FaceSnapscModule) },
    { path: '', component: LandingPageComponent }
  ];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}