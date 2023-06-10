import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  jwtToken: any = null;
  roles:Array<any> = [];

  constructor(private http:HttpClient) { }

  login(user:any){
    return this.http.post(environment.BASE_URL+"/login", user, {observe:"response"});
  }

  saveToken(jwt:any){
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
  }

  loadToken(){
    this.jwtToken = localStorage.getItem('token');
  }

  logout(){
    this.jwtToken=null;
    localStorage.removeItem("token");
  }

  isAdmin(){
    for(let r of this.roles){
      if(r.authority=='ADMIN') return true;
    }
    return false;
  }

  getTasks(){
    if(this.jwtToken==null) this.loadToken();
    return this.http.get(environment.BASE_URL+"/tasks"
    );
  }
}
