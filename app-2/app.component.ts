import { Component } from 'angular2/core';
import { Hero } from './hero';

@Component({
selector: 'my-app',
template: '
<h1>{{title}}</h1>
<h2>My favorite hero is: {{myHero.name}}</h2>
<p>Heroes:</p>
<ul>
  <li *ngFor="let hero of heroes">
      {{hero.name}}
  </li>
</ul>
<p *ngIf="heroes.length > 3">There are many heroes!!</p>
'
})

export class AppComponent {
title = 'Tour of Heros';
heroes = [
new Hero(1, 'windstorm');
new Hero(2, 'Bombasto');
new Hero(3, 'Magneta');
new Hero(4, 'Tornado');
];
myHero = this.heroes[0];
}
