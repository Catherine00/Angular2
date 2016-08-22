import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';



import { HeroDetailComponent }  from './hero-details.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
  				  FormsModule
  				 ],
  declarations: [ AppComponent,HeroDetailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
