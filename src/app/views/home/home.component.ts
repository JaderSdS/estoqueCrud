import { HeaderService } from "./../../services/header.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
})
export class HomeComponent {
  constructor(private headerservice: HeaderService) {
    headerservice.headerData = {
      title: "Início",
      icon: "home",
      routeUrl: "",
    };
  }
}
