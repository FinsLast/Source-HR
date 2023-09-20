import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
declare const $: any;

@Component({
  selector: 'app-index3',
  templateUrl: './index3.component.html',
  styleUrls: ['./index3.component.css']
})
export class Index3Component implements OnInit {

  constructor( private viewportScroller: ViewportScroller) { }
  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId)
  }

  ngOnInit(): void {
    AOS.init();
      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            $(".main-header-top").addClass("setactive");
        } else {
            $(".main-header-top").removeClass("setactive");
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
  bannersliderOptions = {
    margin: 30,
    dots : true,
    nav: true,
          navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'
    ],
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768 : {
        items: 1
      },
      1170: {
        items: 1
      }
    }
  }
  bannersliderslide = [
    {
      img: 'assets/img/slider.png',
    },
    {
      img: 'assets/img/slider-01.png',
    },
    {
      img: 'assets/img/slider-02.png',
    },
    {
      img: 'assets/img/slider-03.png',
    },
  ]
  reviewsliderOptions = {
      margin: 30,
      dots : false,
      nav: true,
      navText: [
        '<i class="fas fa-arrow-left"></i>',
        '<i class="fas fa-arrow-right"></i>'
      ],
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        768 : {
          items: 1
        },
        1170: {
          items: 1
        }
      }
  }
  reviewsliderslide = [
    {
      letter: 'L',
      name: 'leeibrah',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      letter: 'G',
      name: 'Gadgetfix',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ]
}
