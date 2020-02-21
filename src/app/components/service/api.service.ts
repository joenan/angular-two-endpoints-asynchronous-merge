import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  usersListUrl: string = "http://jsonplaceholder.typicode.com/users";
  commentUrl: string = "http://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {}

  getUser(id: any): any {
    return this.http.get(this.usersListUrl + "/" + id);
  }

  getFirstUser() {
    return this.http.get(this.usersListUrl + "/" + 1);
  }

  getAllUsers(): any {
    return this.http.get(this.usersListUrl);
  }

  getUserComments(Id: any): any {
    return this.http.get(this.commentUrl + "/posts?userId=" + Id);
  }
}
