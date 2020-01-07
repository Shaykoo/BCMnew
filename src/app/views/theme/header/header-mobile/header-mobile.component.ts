// Angular
import { Component, OnInit } from '@angular/core';
// Layout
import { LayoutConfigService, ToggleOptions } from '../../../../core/_base/layout';
import { NavService } from '../../nav.service';

@Component({
	selector: 'kt-header-mobile',
	templateUrl: './header-mobile.component.html',
	styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {
	// Public properties
	headerLogo: string;
	asideDisplay: boolean;
	state;

	toggleOptions: ToggleOptions = {
		target: 'body',
		targetState: 'kt-header__topbar--mobile-on',
		togglerState: 'kt-header-mobile__toolbar-topbar-toggler--active'
	};

	/**
	 * Component constructor
	 *
	 * @param layoutConfigService: LayoutConfigService
	 */
	constructor(private layoutConfigService: LayoutConfigService, public navService : NavService) {
		this.navService.state.subscribe(message => this.state = message);
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
		this.headerLogo = this.layoutConfigService.getLogo();
		this.asideDisplay = this.layoutConfigService.getConfig('aside.self.display');
	}

	hideNav(){
		if(this.state === 'open'){
			this.navService.navIsVisible.next('closed') ;

			console.log(this.state)
		}

		else{
			this.navService.navIsVisible.next('open') ;

			console.log(this.state)
		}
	}
}
