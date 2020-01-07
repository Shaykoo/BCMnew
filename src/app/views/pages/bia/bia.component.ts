import { Component, OnInit } from '@angular/core';
import { NavService } from '../../theme/nav.service';

@Component({
  selector: 'kt-bia',
  templateUrl: './bia.component.html',
  styleUrls: ['./bia.component.scss']
})
export class BiaComponent implements OnInit {
  state;
  showNav;

  constructor(public navService : NavService) {
		this.navService.state.subscribe(message => this.state = message);
    console.log(this.state);
   }

  ngOnInit() {
    
  }



}
