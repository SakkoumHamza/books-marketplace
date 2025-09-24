import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { importProvidersFrom } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './app/dashboard/dashboard';
import { BookComponent } from './app/book/book';
import { FavoritesComponent } from './app/favorites/favorites';
import { provideRouter, withHashLocation , Routes} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

const routes:Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'books/:id', component: BookComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()), // only once
    importProvidersFrom(ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })),
    importProvidersFrom(HttpClientModule),
    provideAnimations()
  ]
});
