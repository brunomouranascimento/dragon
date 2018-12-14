import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Dragon } from 'src/app/models/dragon';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  constructor(private http: HttpClient) { }

  getDragons(): Observable<Dragon> {
    return this.http.get<Dragon>(`${API_URL}/api/dragons/?page=3`);
  }

  getDragon(slug: string): Observable<Dragon> {
    return this.http.get<Dragon>(`${API_URL}/api/dragons/${slug}`);
  }

  updateDragon(slug: string, dragon: Dragon) {
    return this.http.put(`${API_URL}/api/dragons/${slug}`, dragon);
  }

  addDragon(dragon: Dragon) {
    return this.http.post(`${API_URL}/api/dragons/`, dragon);
  }

  deleteDragon(slug: string) {
      return this.http.delete(`${API_URL}/api/dragons/${slug}`);
  }
}
