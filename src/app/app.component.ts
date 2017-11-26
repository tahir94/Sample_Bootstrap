import { Component } from '@angular/core';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor()  {

  }

 
  //   $(document).ready(function() {
  //     var sidebarMainMenu = $('#sidebar-menu .main-menu');
  // 	var staticContent = $('#static-content');
  // 	staticContent.find('h1').each(function() {
  // 		sidebarMainMenu.append('<li id="'+ $(this).attr('id') + '-menu"><a href="#' + $(this).attr('id') + '">' + $(this).html() + '</li>');
  // 		this.title = sidebarMainMenu.find('#' + $(this).attr('id'));
  // 	});
  // 	staticContent.find('h2').each(function() {
  // 		this.prevTitle = sidebarMainMenu.find('#' + $(this).prevAll('h1').first().attr('id') + '-menu');
  // 		this.prevTitle.not(":has(ul)").append('<ul class="sub-menu"></ul>');
  // 		this.prevTitle.find('.sub-menu').append('<li id="'+ $(this).attr('id') + '-menu"><a href="#' + $(this).attr('id') + '">' + $(this).html() + '</li>');
  // 	});
  // 	sidebarMainMenu.affix({
  // 	      offset: {
  // 	        top: 0  // To Modify according to the height offset
  // 	      }
  // 	});
  // });
  // }
}
