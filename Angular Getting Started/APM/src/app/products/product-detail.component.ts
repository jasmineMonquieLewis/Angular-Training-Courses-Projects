import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

//selectors are only required if the component will be nested 
//in another component
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  imageWidth: number = 200;
  imageMargin: number = 2;

  constructor(private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    //add a '+' at the beginning bcuz the parameter 'id' is a string need to convert to a number
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`; //using back ticks to display the template
    this.product = {
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    }
  }

  onBack(): void {
    this. router.navigate(['/products']);
  }
}
