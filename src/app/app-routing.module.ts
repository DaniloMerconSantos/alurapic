import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { AuthGaurd } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: { photos: PhotoListResolver },
    data: {
      title: 'Timeline',
    },
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
    canActivate: [AuthGaurd],
    data: {
      title: 'Photo upload',
    },
  },
  {
    path: 'p/:photoId',
    component: PhotoDetailsComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
