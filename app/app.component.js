System.register(['angular2/core', './hero'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heros';
                    this.heroes = [
                        new hero_1.Hero(1, 'windstorm'),
                        new hero_1.Hero(2, 'Bombasto'),
                        new hero_1.Hero(3, 'Magneta'),
                        new hero_1.Hero(4, 'Tornado')
                    ];
                    this.myHero = this.heroes[0];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '
                            < h1 > {} }, { title: title }, /h1>
                        < h2 > My, favorite, hero, is, {}, { myHero: .name }, /h2>
                        < p > Heroes, /p>
                        < ul >
                         * ngFor, "let hero of heroes" >
                        {}, { hero: .name }, /li>
                        < /ul>
                        < p * ngIf, "heroes.length > 3" > There, are, many, heroes, !!/p>, '), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map