import { AService } from './todo';//interface importada do arquivo ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoLink {

  private usersURL =  'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

   //trazendo os valores de nossa interface com o observable que está no array por um injetavel. Com o observable estamos tornando nossa chamada assíncrona
  ObserTodos(): Observable<AService[]>{
    return this.http.get<AService[]>(this.usersURL);
  }
}