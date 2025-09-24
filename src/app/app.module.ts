import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // correct
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
// import { AppRoutingModule } from './app.routes';

import { ApiService } from './api.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    })
  ],
  providers: [
    ApiService
  ],
})
export class AppModule { }
