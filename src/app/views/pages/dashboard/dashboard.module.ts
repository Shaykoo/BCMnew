// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import {MatSidenavModule} from '@angular/material/sidenav'; 
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { DashboardComponent } from './dashboard.component';


import {MatRadioModule} from '@angular/material/radio'; 
import { FormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		MatRadioModule,
		FormsModule,
		MatSidenavModule,
		CoreModule,
		NgbCollapseModule,
		RouterModule.forChild([
			{
				path: '',
				component: DashboardComponent
			},
		]),
	],
	providers: [],
	declarations: [
		DashboardComponent,
	]
})
export class DashboardModule {
}
