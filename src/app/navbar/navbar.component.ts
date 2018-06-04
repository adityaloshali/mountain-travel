import { Component, OnInit } from '@angular/core';
import { HideService } from '../hide.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  hide: boolean;

  constructor(private hideService: HideService) {
    this.hide = this.hideService.hide;
   }

  ngOnInit() {
  //   $(document).ready(() => {
  //     // $('h1, h3').mouseenter(function(){ 
  //     //   $('h1, h3').addClass('animated infinite pulse') 
  //     // });
  //     // $('h1, h3').mouseleave(function(){ 
  //     //   $('h1, h3').removeClass('animated infinite pulse') 
  //     // });
  //     // $('.btn').mouseenter(function(){ 
  //     //   $(this).addClass('animated infinite shake') 
  //     // });
  //     // $('.btn').mouseleave(function(){ 
  //     //   $(this).removeClass('animated infinite shake') 
  //     // });
  //     if(this.hideService.hide){
  //       console.log("Hide True");
  //     }
  // });
    if(this.hideService.hide){
      console.log("Hidden True");
    }
    console.log(this.hide);
  }

  get isHidden() {
    return this.hideService.hide;
  }

}
