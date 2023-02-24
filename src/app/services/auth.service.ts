import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { } 
  baseServerUrl = "https://localhost:44361/api/";

  registerUser(user: Array<String>)
  {
    return this.httpClient.post(this.baseServerUrl + 'User/CreateUser', 
    { 
      FirstName: user[0],
      LastName: user[1],
      Email: user[2],
      Mobile: user[3],
      Gender: user[4],
      Password: user[5]
    }, 
    {
      responseType:'text',
    }
    );
  }
}
