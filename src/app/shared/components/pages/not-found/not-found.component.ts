import { Component, OnInit } from '@angular/core';


declare var $: any;

@Component({
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): any {
    const gif = [
      'wtf-1.gif', 
      'wtf-2.gif', 
      'wtf-3.gif', 
      'wtf-4.gif',
      'wtf-5.gif', 
      'wtf-6.gif', 
      'wtf-7.gif', 
      'wtf-8.gif',
      'wtf-9.gif', 
      'wtf-10.gif',
      'wtf-11.gif', 
      'wtf-12.gif', 
      'wtf-13.gif', 
      'wtf-14.gif',
      'wtf-15.gif', 
      'wtf-16.gif', 
      'wtf-17.gif', 
      'wtf-18.gif',
      'wtf-19.gif', 
      'wtf-20.gif',
//      'wtf-21.gif', 
      'wtf-22.gif', 
      'wtf-23.gif', 
      'wtf-24.gif',
      'wtf-25.gif', 
      'wtf-26.gif', 
      'wtf-27.gif', 
      'wtf-28.gif',
      'wtf-29.gif', 
      'wtf-30.gif',
      'wtf-31.gif', 
      'wtf-32.gif', 
      'wtf-33.gif', 
      'wtf-34.gif',
      'wtf-35.gif', 
      'wtf-36.gif', 
      'wtf-37.gif', 
//      'wtf-38.gif', 
      'wtf-39.gif',
      'wtf-40.gif', 
      'wtf-41.gif',
      'wtf-42.gif',

    ];
    $('body').css({'background': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(assets/images/404/' + gif[Math.floor(Math.random() *  gif.length)] + ')'});
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }
}
