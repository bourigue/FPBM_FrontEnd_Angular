import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../models/user";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
      localStorage.removeItem("currentUser");
    this.currentUserSubject = new BehaviorSubject<User>(

      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    let info={
      "username": username,
      "password": password,
    }
    // @ts-ignore
    return this.http
        .post<User>("http://localhost:8080/login",JSON.stringify(info))
        .pipe(
            map((user) => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem("role",user.role[0]['authority'])
                console.log(user.role[0]['authority'])
                localStorage.setItem("username",user.username)

              localStorage.setItem("token",user.access_token)
                console.log(user.access_token);
              // @ts-ignore
                localStorage.setItem("currentUser", JSON.stringify(user));
              this.currentUserSubject.next(user);
              return user;


            },)
        );

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
    return of({ success: false });
  }
}
