import { Component, OnInit } from '@angular/core';
import { ZipcodeService } from '../services/zipcode.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public dataSource:any;
  displayedColumns: string[] = ['id', 'city', 'zipcode'];

  constructor(private zipcodeService: ZipcodeService) { }

  ngOnInit() {
    this.getList();
  }

  async getList() {
    this.zipcodeService.getAll()
    .subscribe (
      async (data)=> {
        this.dataSource = data;
      },
      async (error) => {
       alert(error)
      }
    )
  }
}
