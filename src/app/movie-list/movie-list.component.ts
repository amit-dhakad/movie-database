import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../service/movie.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];
  cols: any[];
  constructor(private _movieService: MovieService) {}

  ngOnInit() {
    this.getMovieList();
    this.cols = [
      { field: 'movie_title', header: 'Movie' },
      { field: 'director_name', header: 'Director' },
      { field: 'actor_1_name', header: 'Actor 1' },
      { field: 'actor_2_name', header: 'Actor 2' },
      { field: 'genres', header: 'Genres' },
      { field: 'language', header: 'Language' },
      { field: 'country', header: 'Country' },
      { field: 'content_rating', header: 'Rating' },
      { field: 'budget', header: 'Budget' },
      { field: 'title_year', header: 'Year' },
      { field: 'plot_keywords', header: 'Plot Keyword' },
      { field: 'movie_imdb_link', header: 'Imdb' }
    ];
  }

  getMovieList() {
    this._movieService.showLoader();
    console.log('get');
    this._movieService.getMovieList().subscribe(
      response => {
        this.movieList = response;
        console.log('this.movieList: ', this.movieList);
        this._movieService.hideLoader();
      },
      err => {}
    );
  }

  imdb(url: string) {
    window.open(url);
  }
}
