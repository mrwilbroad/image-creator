import { HttpClient, withJsonpSupport } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

/**
 * q = quote text
 * a = author name
 * i = author image (key required)
 * c = character count
 * h = pre-formatted HTML quote
 */
export interface QuoteProps {
  q: string;
  a: string;
  i: string;
  c: string;
  h: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private baseUrl: string = 'https://zenquotes.io/api';

  constructor(private http: HttpClient) {}

  quote(): Observable<QuoteProps> {

    return this.http.get<QuoteProps>('https://zenquotes.io/api/quotes/', {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    };
  }

