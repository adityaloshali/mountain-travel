import { Component, OnInit } from '@angular/core';
import { HideService } from '../hide.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  constructor(private hideService: HideService) {
    this.hideService.hide = true;
  }

  ngOnInit() {
  }

}
