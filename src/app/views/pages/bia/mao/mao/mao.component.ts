import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface MAO {
  id: number;
  description: string;
  rto: string;
  status: string;
  action: boolean;
  }

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const DESCRIPTION: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];


@Component({
  selector: 'kt-mao',
  templateUrl: './mao.component.html',
  styleUrls: ['./mao.component.scss']
})
export class MaoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'description', 'rto', 'status', 'action'];
  dataSource: MatTableDataSource<MAO>;

  addFormisCollapsed = true;


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor() {
    // Create 100 users
    const description = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(description);
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

/** Builds and returns a new User. */
function createNewUser(id: number): MAO {
  const description = DESCRIPTION[Math.round(Math.random() * (DESCRIPTION.length - 1))] + ' ' +
  DESCRIPTION[Math.round(Math.random() * (DESCRIPTION.length - 1))].charAt(0) + '.';

  return {
    id: id,
    description: description,
    rto: Math.round(Math.random() * 100).toString(),
    // status: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    status: 'Active',
    action:true
  };

}
