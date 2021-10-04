import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  ServiceUrl:any = 'https://api.sunhouse.co.id/bookstore/index.php/';
  constructor(
    public http:HttpClient
  ) { 
    
  }

  get(url:any){
    return this.http.get(this.ServiceUrl+url);
  }

  post(url:any, data:any){
    return this.http.post(this.ServiceUrl+url, data);
  }

  update(url:any, data:any){
    return this.http.put(this.ServiceUrl+url, data);
  }

  delete(url:any){
    return this.http.delete(this.ServiceUrl+url);
  }
}
