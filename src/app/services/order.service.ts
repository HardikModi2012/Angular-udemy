import { Http, RequestOptions , Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OrderService {

  constructor(private http: AuthHttp) {
  }

  getOrders() { 
    // let headers = new Headers();
    // let token = localStorage.getItem('token');
    // headers.append('Authrization', 'Bearer' + token);

    // let options = new RequestOptions({ headers: headers });
    return this.http.get('/api/orders')
      .map(response => response.json());
  }
}
