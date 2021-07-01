import { Mensagem } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  baseUrl = "http://localhost:3000/mensagem"

  constructor(private http: HttpClient) { }

  create(msg: Mensagem): Observable<Mensagem> {
    return this.http.post<Mensagem>(this.baseUrl, msg).pipe(
      map((obj) => obj)
    );
  }


}
