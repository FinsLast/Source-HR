import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
declare const $: any;

@Component({
  selector: 'app-index2',
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.css']
})
export class Index2Component implements OnInit {

  constructor( private viewportScroller: ViewportScroller) { }
  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId)
  }

  ngOnInit(): void {
    AOS.init();
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 100) {
          $(".main-menu-head").addClass("setactive");
      } else {
          $(".main-menu-head").removeClass("setactive");
      }
  });
  $('body').append('<div class="sidebar-overlay"></div>');
      $(document).on('click', '#mobile_btn', function() {
        $('main-wrapper').toggleClass('slide-nav');
        $('.sidebar-overlay').toggleClass('opened');
        $('html').addClass('menu-opened');
        return false;
      });
      
      $(document).on('click', '#menu_close', function() {
          $('html').removeClass('menu-opened');
          $('.sidebar-overlay').removeClass('opened');
          $('main-wrapper').removeClass('slide-nav');
      }); 

      $(document).on('click', '.sidebar-overlay', function() {
        $('html').removeClass('menu-opened');
        $(this).removeClass('opened');
        $('main-wrapper').removeClass('slide-nav');
      });
  }
  pricingsliderslide = [
    {
      img: 'assets/img/vector/vector-background.png',
      header: 'File Manager',
      content: 'It is a long established fact that a will be distracted.',
      fontimg: 'fa-folder-open'
    },
    {
      img: 'assets/img/vector/vector-background.png',
      header: 'Contacts and Email',
      content: 'It is a long established fact that a will be distracted.',
      fontimg: 'fa-envelope-open-text'
    },
    {
      img: 'assets/img/vector/vector-background.png',
      header: 'Timesheet and Overtime',
      content: 'It is a long established fact that a will be distracted.',
      fontimg: 'fa-clock'
    },
    {
      img: 'assets/img/vector/vector-background.png',
      header: 'File Manager',
      content: 'It is a long established fact that a will be distracted.',
      fontimg: 'fa-folder-open'
    },
    {
      img: 'assets/img/vector/vector-background.png',
      header: 'Contacts and Email',
      content: 'It is a long established fact that a will be distracted.',
      fontimg: 'fa-envelope-open-text'
    },
    {
      img: 'assets/img/vector/vector-background.png',
      header: 'Timesheet and Overtime',
      content: 'It is a long established fact that a will be distracted.',
      fontimg: 'fa-clock'
    },
  ];
  pricingsliderOptions = {
      margin: 30,
      dots : false,
			nav: true,
			navText: [
				'<i class="fas fa-chevron-left"></i>',
				'<i class="fas fa-chevron-right"></i>'
			],
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				768 : {
					items: 2
				},
				1170: {
					items: 3
				}
			}
  }
  reviewsliderOptions = {
    margin: 30,
            dots : false,
			nav: true,
			navText: [
				'<i class="fas fa-chevron-left"></i>',
				'<i class="fas fa-chevron-right"></i>'
			],
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				768 : {
					items: 2
				},
				1170: {
					items: 3
				}
			}
  }
  reviewsliderslide = [
    {
      img: 'assets/img/vector/quote.png',
      letter: 'L',
      name: 'leeibrah',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      img: 'assets/img/vector/quote.png',
      letter: 'G',
      name: 'Gadgetfixindia',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      img: 'assets/img/vector/quote.png',
      letter: 'D',
      name: 'Diepak',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      img: 'assets/img/vector/quote.png',
      letter: 'L',
      name: 'leeibrah',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ]
}
