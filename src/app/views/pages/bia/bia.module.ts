import {
	NgModule
} from '@angular/core';
import {
	CommonModule
} from '@angular/common';
import {
	BiaComponent
} from './bia.component';

import {
	RouterModule
} from '@angular/router';
import {
	RiskappetiteComponent
} from './riskappetite/riskappetite.component';
import {
	KtBiaSideNavComponent
} from './kt-bia-side-nav/kt-bia-side-nav.component';
import {
	ProductsComponent
} from './products/products.component';
import {
	PartialsModule
} from '../../partials/partials.module';
import {
	CoreModule
} from '../../../core/core.module';
import {
	NgbCollapseModule
} from '@ng-bootstrap/ng-bootstrap';
import {
	CriticalDeadlinesComponent
} from './critical-deadlines/critical-deadlines/critical-deadlines.component';
import {
	CriticallyDefinitionsComponent
} from './critically-definitions/critically-definitions/critically-definitions.component';
import {
	DependencyTypesComponent
} from './dependency-types/dependency-types/dependency-types.component';
import {
	ImpactCriticallyRatingComponent
} from './impact-critically-rating/impact-critically-rating/impact-critically-rating.component';
import {
	ImpactSeverityDefinitionsComponent
} from './impact-severity-definitions/impact-severity-definitions/impact-severity-definitions.component';
import {
	ImpactTypesComponent
} from './impact-types/impact-types/impact-types.component';
import {
	InternalRaAnswerTypesComponent
} from './internal-ra-answer-types/internal-ra-answer-types/internal-ra-answer-types.component';
import {
	InternalRaQuestionsComponent
} from './internal-ra-questions/internal-ra-questions/internal-ra-questions.component';
import {
	MaoComponent
} from './mao/mao/mao.component';
import {
	MissionCriticalComponent
} from './mission-critical/mission-critical/mission-critical.component';
import {
	OverideImpactCriticallyRatingComponent
} from './overide-impact-critically-rating/overide-impact-critically-rating/overide-impact-critically-rating.component';
import {
	OverideMissionCriticalComponent
} from './overide-mission-critical/overide-mission-critical/overide-mission-critical.component';
import {
	PeakTimesComponent
} from './peak-times/peak-times/peak-times.component';
import {
	RpoComponent
} from './rpo/rpo/rpo.component';
import {
	ServicesComponent
} from './services/services/services.component';
import {
	SubProductsComponent
} from './sub-products/sub-products/sub-products.component';
import {
	SubServicesComponent
} from './sub-services/sub-services/sub-services.component';
import {
	GestureConfig,
	MatButtonModule,
	MatCheckboxModule,
	MatFormFieldModule,
	MatDialogModule,
	MatTabsModule,
	MatProgressSpinnerModule,
	MatMenuModule,
	MatIconModule,
	MatInputModule,
	MatSelectModule,
	MatToolbarModule,
	MatCardModule,
	MatChipsModule,
	MatListModule,
	MatTooltipModule,
	MatNativeDateModule,
	MatDatepickerModule,
	MatTableModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatSortModule,
	MatSnackBarModule,
	MatStepperModule,
	MatGridListModule,
	MatExpansionModule,
	MatRadioModule,
	MatBadgeModule
} from '@angular/material';


@NgModule({
	declarations: [BiaComponent, RiskappetiteComponent, KtBiaSideNavComponent, ProductsComponent, CriticalDeadlinesComponent, CriticallyDefinitionsComponent, DependencyTypesComponent, ImpactCriticallyRatingComponent, ImpactSeverityDefinitionsComponent, ImpactTypesComponent, InternalRaAnswerTypesComponent, InternalRaQuestionsComponent, MaoComponent, MissionCriticalComponent, OverideImpactCriticallyRatingComponent, OverideMissionCriticalComponent, PeakTimesComponent, RpoComponent, ServicesComponent, SubProductsComponent, SubServicesComponent],
	imports: [
		CommonModule,
		NgbCollapseModule,
		CoreModule,
		MatButtonModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatDialogModule,
		MatTabsModule,
		MatProgressSpinnerModule,
		MatMenuModule,
		MatIconModule,
		MatInputModule,
		MatSelectModule,
		MatToolbarModule,
		MatCardModule,
		MatChipsModule,
		MatListModule,
		MatTooltipModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatTableModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatSortModule,
		MatSnackBarModule,
		MatStepperModule,
		MatGridListModule,
		MatExpansionModule,
		MatRadioModule,
		MatBadgeModule,
		PartialsModule,
		RouterModule.forChild([{
			path: '',
			component: BiaComponent,

			children: [{
					path: 'risk-appetite',
					component: RiskappetiteComponent
				},

				{
					path: 'products',
					component: ProductsComponent
				},
				{
					path: 'critical-deadlines',
					component: CriticalDeadlinesComponent
				},
				{
					path: 'critically-definitions',
					component: CriticallyDefinitionsComponent
				},
				{
					path: 'dependency-types',
					component: DependencyTypesComponent
				},
				{
					path: 'impact-critically-rating',
					component: ImpactCriticallyRatingComponent
				},
				{
					path: 'impact-severity-definitions',
					component: ImpactSeverityDefinitionsComponent
				},
				{
					path: 'impact-types',
					component: ImpactTypesComponent
				},
				{
					path: 'internal-ra-answer-types',
					component: InternalRaAnswerTypesComponent
				},
				{
					path: 'internal-ra-questions',
					component: InternalRaQuestionsComponent
				},
				{
					path: 'mao',
					component: MaoComponent
				},
				{
					path: 'mission-critical',
					component: MissionCriticalComponent
				},
				{
					path: 'overide-impact-critically-rating',
					component: OverideImpactCriticallyRatingComponent
				},
				{
					path: 'overide-mission-critical',
					component: OverideMissionCriticalComponent
				},
				{
					path: 'peak-times',
					component: PeakTimesComponent
				},
				{
					path: 'risk-appetite',
					component: RiskappetiteComponent
				},
				{
					path: 'rpo',
					component: RpoComponent
				},
				{
					path: 'services',
					component: ServicesComponent
				},
				{
					path: 'sub-products',
					component: SubProductsComponent
				},
				{
					path: 'sub-services',
					component: SubServicesComponent
				}

			]
		}, ]),
	],
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatDialogModule,
		MatTabsModule,
		MatProgressSpinnerModule,
		MatMenuModule,
		MatIconModule,
		MatInputModule,
		MatSelectModule,
		MatToolbarModule,
		MatCardModule,
		MatChipsModule,
		MatListModule,
		MatTooltipModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatTableModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatSortModule,
		MatSnackBarModule,
		MatStepperModule,
		MatGridListModule,
		MatExpansionModule,
		MatRadioModule,
		MatBadgeModule
	]
})

export class BiaModule {}