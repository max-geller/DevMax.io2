import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  templateUrl: './bad-gateway.component.html',
})
export class BadGatewayComponent implements OnInit {

  constructor() { }

  ngOnInit(): any {
    const gif = [
      'timeout-1.gif', 
      'timeout-2.gif', 
      'timeout-3.gif', 
      'timeout-4.gif',
      'timeout-5.gif', 
      'timeout-6.gif', 
      'timeout-7.gif', 
      'timeout-8.gif',
      'timeout-9.gif', 
      'timeout-10.gif',
      'timeout-11.gif', 
      'timeout-12.gif', 
      'timeout-13.gif', 
      'timeout-14.gif',
      'timeout-15.gif', 
      'timeout-16.gif', 
      'timeout-17.gif', 
      'timeout-18.gif',
      'timeout-19.gif', 
      'timeout-20.gif',

    ];
    $('body').css({'background': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(assets/images/502/' + gif[Math.floor(Math.random() *  gif.length)] + ')'});
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }
}
