import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './service/movie.service';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@NgModule({
  declarations: [AppComponent, MovieListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
