import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = 'http://starlord.hackerearth.com/movieslisting';
  constructor(private http: HttpClient) {}
  loaderSubject = new BehaviorSubject<boolean>(false);
  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url);
  }

  //spinner
  showLoader() {
    this.loaderSubject.next(true);
  }

  hideLoader() {
    this.loaderSubject.next(false);
  }

  loaderStatus(): Observable<boolean> {
    return this.loaderSubject.asObservable();
  }
}
