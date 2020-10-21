import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  productData: any;
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getBooksData();
  }
  getBooksData(): void {
    this.commonService.getLink().subscribe((data) => {
      this.productData = data;
    });
  }
}
