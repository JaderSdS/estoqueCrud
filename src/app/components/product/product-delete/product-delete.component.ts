import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../../../services/product.service";
import { Product } from "../../../model/product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.sass"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    name: "",
    price: 0,
  };
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id")!;
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }
  deleteProduct() {
    return this.productService
      .delete(this.product.id!)
      .subscribe(() => {
        this.productService.showMessage("Produto excluido com sucesso!");
        this.router.navigate(["/products"]);
      });
  }
  cancel() {
    this.router.navigate(["/products"]);
  }
}
