"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var HEROES = [
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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
        this.selectedhero = hero_1.Hero;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedhero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n     <div class=\"row\">\n     <div class=\"col-sm-12\">\n     <div class=\"container\">\n     <h2>My Heroes </h2>\n      <h3>{{title}}</h3>\n      <ul>\n      \t<li class=\"btn-success\" \n      \t*ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\">\n      \t\t<span>{{hero.id}}</span> {{hero.name}}\n      \t</li>\n      </ul>\n       <div *ngIf=\"selectedhero\">\n       <h4>{{selectedhero.name}} details!!</h4>\n       <label>Id: {{selectedhero.id}} </label>\n       <input type=\"text\" [(ngModel)]= \"selectedhero.name\" placeholder =\"name\"/>\n      </div>\n     </div>\n     </div>\n     </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map