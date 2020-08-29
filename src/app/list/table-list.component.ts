import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableListDataSource } from './table-list-datasource';
import { ApiService } from 'src/app/api.service';
import { IListItem } from 'src/app/models';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<IListItem>;
  dataSource: TableListDataSource;

  queryParam = 'order/9999';
  isLoadingResults: boolean = true;
  isListView: boolean = false;
  isDaily= 'All'
  allData: IListItem[];
  filteredData: IListItem[];
  constructor(private api: ApiService) { }

  displayedColumns: string[] = ['restaurant_id', 'time', 'user_name'];

  ngOnInit() {
    // this.dataSource = new TableListDataSource();
    this.getListData()
  }
  getListData() {
    this.api.getList(this.queryParam)
      .subscribe(obj => {
        if (obj.length) {
          this.dataSource = new TableListDataSource(obj);
          this.table.dataSource = this.dataSource;
          this.allData = obj;
          this.filteredData = obj;
          this.isLoadingResults = false;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        else {
          alert('there is an error')
        }
      }, err => console.log(err))
  }
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  }
  toggleListView(e) {
    if(!this.isListView) {
      this.displayedColumns = ['restaurant_id'];
    }
    else {
      this.displayedColumns = ['restaurant_id', 'time',  'user_name'];
    }
    this.isListView = e
  }
  handleChangeFilter(value:string) {
    let today = new Date();
    let activeMonth = new Date().getMonth()
    let dateToFilter = new Date();
    dateToFilter.setMonth(activeMonth);
      if (value === 'All') {
        this.filteredData = this.allData;
      }
      else {
      switch (value) {
        case "monthly":
          dateToFilter.setDate(1);
          dateToFilter.setHours(0);
          break;
        case "weekly":
          let day = today.getDate();
          day = day > 7 ? day - 7 : 1;
          dateToFilter.setDate(day);
          break;

        default: dateToFilter.setHours(0);
          break;
      }
        this.filteredData = this.allData.filter(obj => {
          let objDate = new Date(obj.time)
          return objDate < today && objDate > dateToFilter
        })
      }
      this.dataSource = new TableListDataSource(this.filteredData);
      this.table.dataSource = this.dataSource;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    
  }
}
