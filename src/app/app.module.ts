import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HomeComponent} from './home/home.component';
import {ArtistComponent} from './artists/artist.component';
import {ProductComponent} from './products/product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterPipe} from './products/filter.pipe';
import {RouterModule} from '@angular/router';
import {ErrorComponent} from './error/error.components';
import {ContactComponent} from './contact/contact.component';
import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [
      HttpModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
          { path: '', component: HomeComponent },
          { path: 'products', component: ProductComponent },
          { path: 'artists', component: ArtistComponent },
          { path: 'contact', component: ContactComponent},
          { path: '**', component: ErrorComponent },
      ])
  ],
  declarations: [
      FilterPipe,
      AppComponent,
      HomeComponent,
      ProductComponent,
      ArtistComponent,
      ContactComponent,
      ErrorComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
