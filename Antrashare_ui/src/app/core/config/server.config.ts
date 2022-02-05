import { HttpHeaders } from '@angular/common/http';

export const SERVER_CONFIG = {
  baseUrl: 'http://localhost:4231/api',

  httpOptions: {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
}