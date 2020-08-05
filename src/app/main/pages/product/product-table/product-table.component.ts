import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
	selector: 'app-product-table',
	templateUrl: './product-table.component.html',
	styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

	public displayedColumns: string[] = ['name', 'identification', 'age', 'actions'];
	public dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	constructor() { }

	ngOnInit() {
	}

}

const ELEMENT_DATA: any[] = [
	{ name: 'Manuel Enrique Osorio Ochoa', identification: '1047506765', age: 21, active: true },
];
