import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Product } from "../../../model/product.model";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.sass"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {
    name: "",
    price: null,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id")!;
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct() {
    return this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto alterado com sucesso!");
      this.router.navigate(["/products"]);
    });
  }
  cancel() {
    this.router.navigate(["/products"]);
  }
}
