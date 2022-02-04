import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_CONFIG } from '../core/config/server.config';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  private path: string = [SERVER_CONFIG.baseUrl, 'news'].join('/');

  constructor(private http: HttpClient) { }

  post(data = {}) {
    return this.http.post(this.path, data);
  }
}
