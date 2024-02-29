import { Routes } from '@angular/router';
import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { NabadyService } from './nabady.service';

@Component({
  selector: 'app-nabady',
  templateUrl: './nabady.component.html',
  styleUrls: ['./nabady.component.css'],
})
export class NabadyComponent implements OnInit {
  data: any;
  categories: string[];
  constructor(@Inject(NabadyService) private nabadyData: NabadyService) { }

  ngOnInit() {
    this.nabadyData.fetchProducts('').subscribe((data) => {
      this.data = data;
    });
    this.nabadyData.getCategory().subscribe((ctg) => {
      this.categories = ctg;
    });
  }
  setCategorie(event: any) {
    const selected:string = event.target.value;
    console.log('setCategorie:', selected);
    this.nabadyData.fetchProducts(selected).subscribe((data) => {
      this.data = data;
    });
  }
}
