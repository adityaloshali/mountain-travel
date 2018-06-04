import { Component, OnInit } from '@angular/core';
import { HideService } from '../hide.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private hideService: HideService) {
    this.hideService.hide = false;
  }

  public ngOnInit()
  {
    $(document).ready(function(){
        // $("button").click(function(){
        //     var div = $("h1");  
        //     div.animate({left: '100px',fontSize: '5em'}, "slow");
        //     //div.animate({fontSize: '5em'}, "slow");
        // });
        // setTimeout(()=>{
        //   var div = $("h1");
        //   var div2 = $("h3");  
        //   div.animate({top: '200px',fontSize: '5em'}, "slow");
        //   div2.animate({fontSize: '3em'}, "slow");
        // }, 2000);
        $('h1, h3').mouseenter(function(){ 
          $('h1, h3').addClass('animated infinite pulse') 
        });
        $('h1, h3').mouseleave(function(){ 
          $('h1, h3').removeClass('animated infinite pulse') 
        });
        $('.btn').mouseenter(function(){ 
          $(this).addClass('animated infinite shake') 
        });
        $('.btn').mouseleave(function(){ 
          $(this).removeClass('animated infinite shake') 
        });
    });
  }

}
