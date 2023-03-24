import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderService } from "src/app/services/header.service";

@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.sass"],
})
export class ProductCrudComponent implements OnInit {
  constructor(private router: Router, private headerservice: HeaderService) {
    headerservice.headerData = {
      title: "Cadastro de produtos",
      icon: "storefront",
      routeUrl: "/products",
    };
  }
  ngOnInit(): void {}

  navigateToProductCreate(): void {
    this.router.navigate(["/products/create"]);
  }
}
