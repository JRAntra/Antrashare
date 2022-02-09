import { HttpHeaders } from '@angular/common/http';

export const DEFAULT_HTTP_CONFIG = {
  httpOptions: {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
}