import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  showLoader = false;
  sub: Subscription;

  constructor(
    private _movieService: MovieService,
    private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.sub = this._movieService.loaderStatus().subscribe(data => {
      this.showLoader = data;
      this.cdRef.detectChanges();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
