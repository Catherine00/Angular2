import { Component } from '@angular/core';
import { Hero } from './hero'

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


@Component({
  selector: 'my-app',
  template: `
     <div class="row">
     <div class="col-sm-12">
     <div class="container">
     <h2>My Heroes </h2>
      <h3>{{title}}</h3>
      <ul>
      	<li class="btn-success" 
      	*ngFor="let hero of heroes" (click)="onSelect(hero)">
      		<span>{{hero.id}}</span> {{hero.name}}
      	</li>
      </ul>
       <div *ngIf="selectedhero">
       <h4>{{selectedhero.name}} details!!</h4>
       <label>Id: {{selectedhero.id}} </label>
       <input type="text" [(ngModel)]= "selectedhero.name" placeholder ="name"/>
      </div>
     </div>
     </div>
     </div>
    `
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes =HEROES;
  selectedhero= Hero;
  onSelect(hero:Hero):void{
  	this.selectedhero =hero;
  }
  
}
