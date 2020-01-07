import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface RPO {
  id: string;
  description: string;
  status: string;
  action: boolean;
}

const DESCRIPTION: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'kt-rpo',
  templateUrl: './rpo.component.html',
  styleUrls: ['./rpo.component.scss']
})
export class RpoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'description', 'status', 'action'];
  dataSource: MatTableDataSource<RPO>;
  addFormisCollapsed = true;
  
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewRpo(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

// function removeSelectedRows() {

//   this.selection.selected.forEach(item => {
//     let index: number = this.data.findIndex(d => d === item);
//     console.log(this.data.findIndex(d => d === item));
//     this.data.splice(index,1)
//     this.dataSource = new MatTableDataSource<Element>(this.data);
//   });
//   this.selection = new SelectionModel<Element>(true, []);
// }

/** Builds and returns a new User. */
function createNewRpo(id: number): RPO {
  const description = DESCRIPTION[Math.round(Math.random() * (DESCRIPTION.length - 1))] + ' ' +
  DESCRIPTION[Math.round(Math.random() * (DESCRIPTION.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    description: description,
    status: 'Active',
    action:true
  };
}
