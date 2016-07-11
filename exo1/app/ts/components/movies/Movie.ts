import {Component, Input} from '@angular/core';

@Component({
    selector: 'movie',
    templateUrl: 'ts/components/movies/movie.html'
})
export class MovieComponent {
    @Input() theMovie: any;
    constructor() {
    }
}