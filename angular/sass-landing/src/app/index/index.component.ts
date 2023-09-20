import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
declare const $: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

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
  setviewslideOptions = {
    margin: 30,
			dots : false,
			nav: true,
			loop: true,
            navText: [
				'<i class="fas fa-chevron-left"></i>',
				'<i class="fas fa-chevron-right"></i>'
			],
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
  setviewslide = [
    {
      featureimg: 'assets/img/vector/vector5.png',
      featureheader: 'File Manager',
      featurecontent: 'It is a long established fact that a will be distracted.'
    },
    {
      featureimg: 'assets/img/vector/vector6.png',
      featureheader: 'Contacts and Email',
      featurecontent: 'It is a long established fact that a will be distracted.'
    },
    {
      featureimg: 'assets/img/vector/vector7.png',
      featureheader: 'Timesheet and Overtime',
      featurecontent: 'It is a long established fact that a will be distracted.'
    },
    {
      featureimg: 'assets/img/vector/vector8.png',
      featureheader: 'Kanban Board',
      featurecontent: 'It is a long established fact that a will be distracted.'
    }
  ]
  setviewslidespathOptions = {
    margin: 30,
			dots : false,
			nav: true,
			loop: true,
            navText: [
				'<i class="fas fa-chevron-left"></i>',
				'<i class="fas fa-chevron-right"></i>'
			],
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
  setviewslidespath = [
    {
      letter: "L",
      header: "leeibrah",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgclr: "clr1"
    },
    {
      letter: "G",
      header: "Gadgetfixindia",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgclr: "clr2"
    },
    {
      letter: "D",
      header: "Diepak",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgclr: "clr3"
    },
    {
      letter: "L",
      header: "leeibrah",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgclr: "clr1"
    },
    {
      letter: "G",
      header: "Gadgetfixindia",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgclr: "clr2"
    },
    {
      letter: "D",
      header: "Diepak",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgclr: "clr3"
    },
  ]
  setviewslidesetOptions = {
    margin: 30,
    dots : false,
    nav: true,
    loop: true,
          navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
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
  setviewslideset = [
    {
      newsimg: 'assets/img/news-people.jpg',
      date: 'April 18, 2022',
      header: 'Why Web App Maintain Should Be More',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      newsimg: 'assets/img/news-meeting.jpg',
      date: 'April 18, 2022',
      header: 'The Right Thinking Biggest Job Picking The',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      newsimg: 'assets/img/news-customer.jpg',
      date: 'April 18, 2022',
      header: 'Keeping Your Business And Clients Safe With',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      newsimg: 'assets/img/news-people.jpg',
      date: 'April 18, 2022',
      header: 'Why Web App Maintain Should Be More',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      newsimg: 'assets/img/news-meeting.jpg',
      date: 'April 18, 2022',
      header: 'The Right Thinking Biggest Job Picking The',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      newsimg: 'assets/img/news-customer.jpg',
      date: 'April 18, 2022',
      header: 'Keeping Your Business And Clients Safe With',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ]
}
