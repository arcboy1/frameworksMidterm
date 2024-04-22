import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {CONTENT} from "./data/mock-content";
import {StudentInterface} from "./student.interface";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent():Observable<StudentInterface[]>{
    return of(CONTENT);
  }

  getContentByName(studentName: string): Observable<StudentInterface[]> {
    return of(CONTENT.filter(content => content.name === studentName));
  }
}


