import { Component, OnInit } from "@angular/core";
import { ApiService } from "../service/api.service";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"]
})
export class CommentsComponent implements OnInit {
  userInformation: any;
  comments: any;
  mergedUserAndComments: any = {};
  userList: any = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getFirstUserForDisplay();
    this.getAllUsers();
  }

   getAllUsers() {
    return this.api.getAllUsers().subscribe(
      res => {
        this.userList = res;
      },
      error => {
        console.log(error.error.message);
      }
    );
  }

  getUserAndComments(id: any) {
    return this.api.getUser(id).subscribe(
      response => {
        this.userInformation = response;
        this.getUserComments(this.userInformation.id);
      },
      error => {
        console.log(error.error.message);
      }
    );
  }

  getFirstUserForDisplay() {
    return this.api.getFirstUser().subscribe(
      response => {
        this.userInformation = response;
        this.getUserComments(this.userInformation.id);
      },
      error => {
        console.log(error.error.message);
      }
    );
  }
  getUserComments(id: any) {
    return this.api.getUserComments(id).subscribe(
      comments => {
        this.mergedUserAndComments = { ...this.userInformation, comments };
      },
      error => {
        console.log(error.error.message);
      }
    );
  }
}
