import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { IListItem } from 'src/app/models';

export class TableListDataSource extends DataSource<IListItem> {
  data: IListItem[] ;
  paginator: MatPaginator;
  sort: MatSort;

  constructor(data) {
    super();
    this.data = data ;
  }
  connect(): Observable<IListItem[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }
  disconnect() {}
  private getPagedData(data: IListItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }
  private getSortedData(data: IListItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }
    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'user_name': return compare(a.user_name, b.user_name, isAsc);
        case 'time': return compare(new Date(a.time), new Date(b.time), isAsc);
        case 'id': return compare(+a._id, +b._id, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number | Date, b: string | number | Date, isAsc: boolean) {
  if(a instanceof Date) {
    return (<any>b - <any>a) * (isAsc ? 1 : -1)
  }
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
