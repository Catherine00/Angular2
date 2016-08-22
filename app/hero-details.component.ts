import { Component, Input  } from '@angular/core';
import { Hero } from './hero'

@Component({
  selector: 'my-hero-detail',
  template: `
       <div *ngIf="hero">
       <h4>{{hero.name}} details!!</h4>
       <label>Id: {{hero.id}} </label>
       <input type="text" [(ngModel)]= "hero.name" placeholder ="name"/>
      </div>
    `
})
export class HeroDetailComponent {
	@Input()
	hero:Hero;
}