import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
 // private apiUrl = `${environemnt.apiUrl}/movie`;

  constructor(private http: HttpClient) { }
  apiUrl="https://localhost:44353/api/"

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`+"Movie");
  }

  getMovie(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addMovie(movie: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`+"Movie", movie);
  }

  editMovie(movie: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${movie.id}`, movie);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
