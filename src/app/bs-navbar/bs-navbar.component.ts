import { Component } from "@angular/core";
import { AuthService } from "./../auth.service";

@Component({
  selector: "bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.css"]
})
export class BsNavbarComponent {
  constructor(private auth: AuthService) {
    this.auth.user$.subscribe(x => console.log(x));
  }

  logout() {
    this.auth.logout();
  }
}
