import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilService} from '../_utils/index';


@Injectable({providedIn: 'root'})
export class TodoService {

  constructor(private http: HttpClient, public service: UtilService) {
  }
}
