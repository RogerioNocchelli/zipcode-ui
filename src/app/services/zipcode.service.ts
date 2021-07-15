import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({providedIn: 'root'})
export class ZipcodeService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getAll() {    
    return this.get('all');
  }

  save(city: string, zipcode: number) {

    const body = {
      city: city,
      zipcode: zipcode
    };

    return this.post('save', body);
  }
}
