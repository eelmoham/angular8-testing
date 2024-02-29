import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product: {} = {};
  productId: any;
  constructor(@Inject(HttpClient) private http: HttpClient, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
    }
      , (error) => {
        console.log('view product error:', error);
      }
      , () => {
        this.http.get(`https://fakestoreapi.com/products/${this.productId}`).subscribe((data) => {
          this.product = data;
          console.log('product:', this.product);
        }
        );
      }
    )
  }

}
