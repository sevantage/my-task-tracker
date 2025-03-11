import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private env = environment;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.env.baseUrl + '/tasks');
  }
}
